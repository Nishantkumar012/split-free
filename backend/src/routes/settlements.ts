import {Router} from "express"
import prisma from "../prisma"
import { authMiddleware } from "../middlewares/auth"


const router = Router();

router.post("/",authMiddleware,  async(req,res)=>{
    
    
    const {toId,amount,groupId} = req.body;
    try {

         // 1. Validation
    if (!groupId || !toId || !amount) {
      return res
        .status(400)
        .json({ error: "groupId, toId and amount are required" });
    }

    if (!req.userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }


        
    
        // check if you are inside the group
        const fromMembership = await prisma.groupMember.findFirst({
            where: {
                groupId,
                userId: req.userId
            }
        })

         // check if whom you are sending money is part of group or nnot
        const toMembership = await prisma.groupMember.findFirst({
            where: {
                groupId,
                userId: toId
            }
        })

            if(!fromMembership || !toMembership){
                  
                 return res.status(403).json({error:"Both users must be members of the group"})
            }

            const settlement = await prisma.settlement.create({
                 
                data: {
                    fromId: req.userId,
                    toId,
                    amount,
                    groupId
                }
            })
   res.status(201).json({
      message: "Settlement recorded successfully",
      settlement,
    });
  } catch (error: any) {
    console.error("Error creating settlement:", error);
    res.status(500).json({ error: "Internal server error" });
  }

})

export default router;