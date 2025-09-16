import Router from "express"
import prisma from "../prisma"
import { authMiddleware } from "../middlewares/auth"


const router = Router()

// making the group
router.post("/",authMiddleware, async(req,res)=>{
         
      const {name} = req.body;

      if(!name){
         return res.status(400).json({error: "Group name is required"});
      }
       
      try {

       if (!req.userId) {
  return res.status(401).json({ error: "Unauthorized" });
}
           
        const group = await prisma.group.create({

            data: { name }
        });

        await prisma.groupMember.create({
            data: {
                groupId: group.id,
            userId: req.userId,
             role: "admin"
    }
        })

        res.status(201).json(group);
      } catch (error) {
          
          console.log("Error while creating group: ", error)

          res.status(500).json({error: "Internal server error"});
      }
})


router.get("/", authMiddleware, async(req,res)=>{
       
      try {
        
          const groups = await prisma.groupMember.findMany({
              where: {userId: req.userId},
              include: {group: true}

          })

        //   res.status(200).json(groups)

          res.status(200).json(groups.map(g => g.group))

      } catch (error) {
          
        //    console.log 
        res.status(500).json({error: "Internal server error"})
      }
})


// add member to a group
router.post("/:groupId/add-member", authMiddleware, async(req,res)=>{
        
        const { groupId } = req.params;

        // id of the user you want to be member of the group and role you want to give him 
        const { userId, role } = req.body;

        if( !userId ){
            return res.status(400).json({error: "User Id is required to add member"});
        }
        
        try {
              
            //check if group exist
            const group = await prisma.group.findUnique({
                where: {id:groupId}
            })

            if(! group){
                return res.status(400).json({error: "Group not found"});
            }

            
            //check if user is member og group or not 
            const existUser = await prisma.groupMember.findFirst({
                where:{groupId, userId}
            })

            if(existUser) return res.status(400).json({error: "User already in group"})
               

                const newMember = await prisma.groupMember.create({
                    data: {
                        userId,
                        groupId,
                        role: role || "member"
                    }
                })

                  res.status(201).json(newMember);

        }   catch (error: any) {
            console.error("Error adding member:", error);
            res.status(500).json({ error: "Internal server error" });
        }
})


// Get group details by Id 
router.get("/:groupId", authMiddleware, async(req,res)=>{
           
          const { groupId } = req.params;

          try {
            
            //  const group = await prisma.group.findUnique({
            //        where:{id: groupId},
            //        include: { 
            //         members: {
            //             include: {
            //                 user: {
            //                     select: {
            //                         id: true, name: true, email: true
            //                     }}},
            //                 },
            //         expense:{
            //             include:{
            //                paidby:{
            //                     select: {id:true, name:true},
            //                },
            //                     splits: {include:
            //                         {user:{select: {id:true, name:true}}}
            //                     }

            //             }
            //         } 
            //     }
            //  })

                const group = await prisma.group.findUnique({
      where: { id: groupId },
      include: {
        members: {
          include: { user: { select: { id: true, name: true, email: true } } },
        },
        expenses: {
          include: {
            paidBy: { select: { id: true, name: true } },
            splits: { include: { user: { select: { id: true, name: true } } } },
          },
        },
        settlements: {
          include: {
            from: { select: { id: true, name: true } },
            to: { select: { id: true, name: true } },
          },
        },
      },
    });

             if(!group) return res.status(404).json({ error: "Group not found"})

                return res.status(201).json(group)

          } catch (error: any) {
              
                 console.error("Error fetching group:", error);
                res.status(500).json({ error: "Internal server error" });

          }
})

export default router;