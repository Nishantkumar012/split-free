
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model GroupMember
 * 
 */
export type GroupMember = $Result.DefaultSelection<Prisma.$GroupMemberPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model Split
 * 
 */
export type Split = $Result.DefaultSelection<Prisma.$SplitPayload>
/**
 * Model Settlement
 * 
 */
export type Settlement = $Result.DefaultSelection<Prisma.$SettlementPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupMember`: Exposes CRUD operations for the **GroupMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMember.findMany()
    * ```
    */
  get groupMember(): Prisma.GroupMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.split`: Exposes CRUD operations for the **Split** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Splits
    * const splits = await prisma.split.findMany()
    * ```
    */
  get split(): Prisma.SplitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settlement`: Exposes CRUD operations for the **Settlement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settlements
    * const settlements = await prisma.settlement.findMany()
    * ```
    */
  get settlement(): Prisma.SettlementDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Group: 'Group',
    GroupMember: 'GroupMember',
    Expense: 'Expense',
    Split: 'Split',
    Settlement: 'Settlement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "group" | "groupMember" | "expense" | "split" | "settlement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      GroupMember: {
        payload: Prisma.$GroupMemberPayload<ExtArgs>
        fields: Prisma.GroupMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findFirst: {
            args: Prisma.GroupMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findMany: {
            args: Prisma.GroupMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          create: {
            args: Prisma.GroupMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          createMany: {
            args: Prisma.GroupMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          delete: {
            args: Prisma.GroupMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          update: {
            args: Prisma.GroupMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          deleteMany: {
            args: Prisma.GroupMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          upsert: {
            args: Prisma.GroupMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          aggregate: {
            args: Prisma.GroupMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMember>
          }
          groupBy: {
            args: Prisma.GroupMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMemberCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      Split: {
        payload: Prisma.$SplitPayload<ExtArgs>
        fields: Prisma.SplitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SplitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SplitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload>
          }
          findFirst: {
            args: Prisma.SplitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SplitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload>
          }
          findMany: {
            args: Prisma.SplitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload>[]
          }
          create: {
            args: Prisma.SplitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload>
          }
          createMany: {
            args: Prisma.SplitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SplitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload>[]
          }
          delete: {
            args: Prisma.SplitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload>
          }
          update: {
            args: Prisma.SplitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload>
          }
          deleteMany: {
            args: Prisma.SplitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SplitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SplitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload>[]
          }
          upsert: {
            args: Prisma.SplitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload>
          }
          aggregate: {
            args: Prisma.SplitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSplit>
          }
          groupBy: {
            args: Prisma.SplitGroupByArgs<ExtArgs>
            result: $Utils.Optional<SplitGroupByOutputType>[]
          }
          count: {
            args: Prisma.SplitCountArgs<ExtArgs>
            result: $Utils.Optional<SplitCountAggregateOutputType> | number
          }
        }
      }
      Settlement: {
        payload: Prisma.$SettlementPayload<ExtArgs>
        fields: Prisma.SettlementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettlementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettlementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          findFirst: {
            args: Prisma.SettlementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettlementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          findMany: {
            args: Prisma.SettlementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>[]
          }
          create: {
            args: Prisma.SettlementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          createMany: {
            args: Prisma.SettlementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettlementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>[]
          }
          delete: {
            args: Prisma.SettlementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          update: {
            args: Prisma.SettlementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          deleteMany: {
            args: Prisma.SettlementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettlementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettlementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>[]
          }
          upsert: {
            args: Prisma.SettlementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          aggregate: {
            args: Prisma.SettlementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettlement>
          }
          groupBy: {
            args: Prisma.SettlementGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettlementGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettlementCountArgs<ExtArgs>
            result: $Utils.Optional<SettlementCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    group?: GroupOmit
    groupMember?: GroupMemberOmit
    expense?: ExpenseOmit
    split?: SplitOmit
    settlement?: SettlementOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    groups: number
    expenses: number
    splits: number
    settlementsFrom: number
    settlementsTo: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | UserCountOutputTypeCountGroupsArgs
    expenses?: boolean | UserCountOutputTypeCountExpensesArgs
    splits?: boolean | UserCountOutputTypeCountSplitsArgs
    settlementsFrom?: boolean | UserCountOutputTypeCountSettlementsFromArgs
    settlementsTo?: boolean | UserCountOutputTypeCountSettlementsToArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSplitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SplitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSettlementsFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSettlementsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    members: number
    expenses: number
    settlements: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | GroupCountOutputTypeCountMembersArgs
    expenses?: boolean | GroupCountOutputTypeCountExpensesArgs
    settlements?: boolean | GroupCountOutputTypeCountSettlementsArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountSettlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementWhereInput
  }


  /**
   * Count Type ExpenseCountOutputType
   */

  export type ExpenseCountOutputType = {
    splits: number
  }

  export type ExpenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    splits?: boolean | ExpenseCountOutputTypeCountSplitsArgs
  }

  // Custom InputTypes
  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseCountOutputType
     */
    select?: ExpenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeCountSplitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SplitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    groups?: boolean | User$groupsArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    splits?: boolean | User$splitsArgs<ExtArgs>
    settlementsFrom?: boolean | User$settlementsFromArgs<ExtArgs>
    settlementsTo?: boolean | User$settlementsToArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | User$groupsArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    splits?: boolean | User$splitsArgs<ExtArgs>
    settlementsFrom?: boolean | User$settlementsFromArgs<ExtArgs>
    settlementsTo?: boolean | User$settlementsToArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      groups: Prisma.$GroupMemberPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      splits: Prisma.$SplitPayload<ExtArgs>[]
      settlementsFrom: Prisma.$SettlementPayload<ExtArgs>[]
      settlementsTo: Prisma.$SettlementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groups<T extends User$groupsArgs<ExtArgs> = {}>(args?: Subset<T, User$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends User$expensesArgs<ExtArgs> = {}>(args?: Subset<T, User$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    splits<T extends User$splitsArgs<ExtArgs> = {}>(args?: Subset<T, User$splitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settlementsFrom<T extends User$settlementsFromArgs<ExtArgs> = {}>(args?: Subset<T, User$settlementsFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settlementsTo<T extends User$settlementsToArgs<ExtArgs> = {}>(args?: Subset<T, User$settlementsToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.groups
   */
  export type User$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * User.expenses
   */
  export type User$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * User.splits
   */
  export type User$splitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    where?: SplitWhereInput
    orderBy?: SplitOrderByWithRelationInput | SplitOrderByWithRelationInput[]
    cursor?: SplitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SplitScalarFieldEnum | SplitScalarFieldEnum[]
  }

  /**
   * User.settlementsFrom
   */
  export type User$settlementsFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    where?: SettlementWhereInput
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    cursor?: SettlementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * User.settlementsTo
   */
  export type User$settlementsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    where?: SettlementWhereInput
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    cursor?: SettlementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    members?: boolean | Group$membersArgs<ExtArgs>
    expenses?: boolean | Group$expensesArgs<ExtArgs>
    settlements?: boolean | Group$settlementsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Group$membersArgs<ExtArgs>
    expenses?: boolean | Group$expensesArgs<ExtArgs>
    settlements?: boolean | Group$settlementsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      members: Prisma.$GroupMemberPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      settlements: Prisma.$SettlementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Group$membersArgs<ExtArgs> = {}>(args?: Subset<T, Group$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends Group$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Group$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settlements<T extends Group$settlementsArgs<ExtArgs> = {}>(args?: Subset<T, Group$settlementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.members
   */
  export type Group$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * Group.expenses
   */
  export type Group$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Group.settlements
   */
  export type Group$settlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    where?: SettlementWhereInput
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    cursor?: SettlementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model GroupMember
   */

  export type AggregateGroupMember = {
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  export type GroupMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    groupId: string | null
    role: string | null
  }

  export type GroupMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    groupId: string | null
    role: string | null
  }

  export type GroupMemberCountAggregateOutputType = {
    id: number
    userId: number
    groupId: number
    role: number
    _all: number
  }


  export type GroupMemberMinAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    role?: true
  }

  export type GroupMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    role?: true
  }

  export type GroupMemberCountAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    role?: true
    _all?: true
  }

  export type GroupMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMember to aggregate.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GetGroupMemberAggregateType<T extends GroupMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMember[P]>
      : GetScalarType<T[P], AggregateGroupMember[P]>
  }




  export type GroupMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithAggregationInput | GroupMemberOrderByWithAggregationInput[]
    by: GroupMemberScalarFieldEnum[] | GroupMemberScalarFieldEnum
    having?: GroupMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMemberCountAggregateInputType | true
    _min?: GroupMemberMinAggregateInputType
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GroupMemberGroupByOutputType = {
    id: string
    userId: string
    groupId: string
    role: string
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  type GetGroupMemberGroupByPayload<T extends GroupMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
        }
      >
    >


  export type GroupMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    groupId?: boolean
    role?: boolean
  }

  export type GroupMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "groupId" | "role", ExtArgs["result"]["groupMember"]>
  export type GroupMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $GroupMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      groupId: string
      role: string
    }, ExtArgs["result"]["groupMember"]>
    composites: {}
  }

  type GroupMemberGetPayload<S extends boolean | null | undefined | GroupMemberDefaultArgs> = $Result.GetResult<Prisma.$GroupMemberPayload, S>

  type GroupMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupMemberCountAggregateInputType | true
    }

  export interface GroupMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMember'], meta: { name: 'GroupMember' } }
    /**
     * Find zero or one GroupMember that matches the filter.
     * @param {GroupMemberFindUniqueArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMemberFindUniqueArgs>(args: SelectSubset<T, GroupMemberFindUniqueArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupMemberFindUniqueOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMemberFindFirstArgs>(args?: SelectSubset<T, GroupMemberFindFirstArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMember.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupMemberFindManyArgs>(args?: SelectSubset<T, GroupMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupMember.
     * @param {GroupMemberCreateArgs} args - Arguments to create a GroupMember.
     * @example
     * // Create one GroupMember
     * const GroupMember = await prisma.groupMember.create({
     *   data: {
     *     // ... data to create a GroupMember
     *   }
     * })
     * 
     */
    create<T extends GroupMemberCreateArgs>(args: SelectSubset<T, GroupMemberCreateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupMembers.
     * @param {GroupMemberCreateManyArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMemberCreateManyArgs>(args?: SelectSubset<T, GroupMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupMembers and returns the data saved in the database.
     * @param {GroupMemberCreateManyAndReturnArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupMembers and only return the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupMember.
     * @param {GroupMemberDeleteArgs} args - Arguments to delete one GroupMember.
     * @example
     * // Delete one GroupMember
     * const GroupMember = await prisma.groupMember.delete({
     *   where: {
     *     // ... filter to delete one GroupMember
     *   }
     * })
     * 
     */
    delete<T extends GroupMemberDeleteArgs>(args: SelectSubset<T, GroupMemberDeleteArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupMember.
     * @param {GroupMemberUpdateArgs} args - Arguments to update one GroupMember.
     * @example
     * // Update one GroupMember
     * const groupMember = await prisma.groupMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMemberUpdateArgs>(args: SelectSubset<T, GroupMemberUpdateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMemberDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMemberDeleteManyArgs>(args?: SelectSubset<T, GroupMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMemberUpdateManyArgs>(args: SelectSubset<T, GroupMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers and returns the data updated in the database.
     * @param {GroupMemberUpdateManyAndReturnArgs} args - Arguments to update many GroupMembers.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupMembers and only return the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupMember.
     * @param {GroupMemberUpsertArgs} args - Arguments to update or create a GroupMember.
     * @example
     * // Update or create a GroupMember
     * const groupMember = await prisma.groupMember.upsert({
     *   create: {
     *     // ... data to create a GroupMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMember we want to update
     *   }
     * })
     */
    upsert<T extends GroupMemberUpsertArgs>(args: SelectSubset<T, GroupMemberUpsertArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMember.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMemberCountArgs>(
      args?: Subset<T, GroupMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupMemberAggregateArgs>(args: Subset<T, GroupMemberAggregateArgs>): Prisma.PrismaPromise<GetGroupMemberAggregateType<T>>

    /**
     * Group by GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMemberGroupByArgs['orderBy'] }
        : { orderBy?: GroupMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMember model
   */
  readonly fields: GroupMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupMember model
   */
  interface GroupMemberFieldRefs {
    readonly id: FieldRef<"GroupMember", 'String'>
    readonly userId: FieldRef<"GroupMember", 'String'>
    readonly groupId: FieldRef<"GroupMember", 'String'>
    readonly role: FieldRef<"GroupMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GroupMember findUnique
   */
  export type GroupMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findUniqueOrThrow
   */
  export type GroupMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findFirst
   */
  export type GroupMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findFirstOrThrow
   */
  export type GroupMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findMany
   */
  export type GroupMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember create
   */
  export type GroupMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMember.
     */
    data: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
  }

  /**
   * GroupMember createMany
   */
  export type GroupMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupMember createManyAndReturn
   */
  export type GroupMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember update
   */
  export type GroupMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMember.
     */
    data: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
    /**
     * Choose, which GroupMember to update.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember updateMany
   */
  export type GroupMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
  }

  /**
   * GroupMember updateManyAndReturn
   */
  export type GroupMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember upsert
   */
  export type GroupMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMember to update in case it exists.
     */
    where: GroupMemberWhereUniqueInput
    /**
     * In case the GroupMember found by the `where` argument doesn't exist, create a new GroupMember with this data.
     */
    create: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
    /**
     * In case the GroupMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
  }

  /**
   * GroupMember delete
   */
  export type GroupMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter which GroupMember to delete.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember deleteMany
   */
  export type GroupMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to delete
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to delete.
     */
    limit?: number
  }

  /**
   * GroupMember without action
   */
  export type GroupMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    amount: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    amount: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    description: string | null
    amount: number | null
    paidById: string | null
    groupId: string | null
    createdAt: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    description: string | null
    amount: number | null
    paidById: string | null
    groupId: string | null
    createdAt: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    description: number
    amount: number
    paidById: number
    groupId: number
    createdAt: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    amount?: true
  }

  export type ExpenseSumAggregateInputType = {
    amount?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    paidById?: true
    groupId?: true
    createdAt?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    paidById?: true
    groupId?: true
    createdAt?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    paidById?: true
    groupId?: true
    createdAt?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    description: string
    amount: number
    paidById: string
    groupId: string
    createdAt: Date
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    paidById?: boolean
    groupId?: boolean
    createdAt?: boolean
    paidBy?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
    splits?: boolean | Expense$splitsArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    paidById?: boolean
    groupId?: boolean
    createdAt?: boolean
    paidBy?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    paidById?: boolean
    groupId?: boolean
    createdAt?: boolean
    paidBy?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    description?: boolean
    amount?: boolean
    paidById?: boolean
    groupId?: boolean
    createdAt?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "amount" | "paidById" | "groupId" | "createdAt", ExtArgs["result"]["expense"]>
  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paidBy?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
    splits?: boolean | Expense$splitsArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paidBy?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paidBy?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      paidBy: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
      splits: Prisma.$SplitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      amount: number
      paidById: string
      groupId: string
      createdAt: Date
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paidBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    splits<T extends Expense$splitsArgs<ExtArgs> = {}>(args?: Subset<T, Expense$splitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly amount: FieldRef<"Expense", 'Float'>
    readonly paidById: FieldRef<"Expense", 'String'>
    readonly groupId: FieldRef<"Expense", 'String'>
    readonly createdAt: FieldRef<"Expense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense.splits
   */
  export type Expense$splitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    where?: SplitWhereInput
    orderBy?: SplitOrderByWithRelationInput | SplitOrderByWithRelationInput[]
    cursor?: SplitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SplitScalarFieldEnum | SplitScalarFieldEnum[]
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model Split
   */

  export type AggregateSplit = {
    _count: SplitCountAggregateOutputType | null
    _avg: SplitAvgAggregateOutputType | null
    _sum: SplitSumAggregateOutputType | null
    _min: SplitMinAggregateOutputType | null
    _max: SplitMaxAggregateOutputType | null
  }

  export type SplitAvgAggregateOutputType = {
    share: number | null
  }

  export type SplitSumAggregateOutputType = {
    share: number | null
  }

  export type SplitMinAggregateOutputType = {
    id: string | null
    expenseId: string | null
    userId: string | null
    share: number | null
  }

  export type SplitMaxAggregateOutputType = {
    id: string | null
    expenseId: string | null
    userId: string | null
    share: number | null
  }

  export type SplitCountAggregateOutputType = {
    id: number
    expenseId: number
    userId: number
    share: number
    _all: number
  }


  export type SplitAvgAggregateInputType = {
    share?: true
  }

  export type SplitSumAggregateInputType = {
    share?: true
  }

  export type SplitMinAggregateInputType = {
    id?: true
    expenseId?: true
    userId?: true
    share?: true
  }

  export type SplitMaxAggregateInputType = {
    id?: true
    expenseId?: true
    userId?: true
    share?: true
  }

  export type SplitCountAggregateInputType = {
    id?: true
    expenseId?: true
    userId?: true
    share?: true
    _all?: true
  }

  export type SplitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Split to aggregate.
     */
    where?: SplitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Splits to fetch.
     */
    orderBy?: SplitOrderByWithRelationInput | SplitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SplitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Splits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Splits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Splits
    **/
    _count?: true | SplitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SplitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SplitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SplitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SplitMaxAggregateInputType
  }

  export type GetSplitAggregateType<T extends SplitAggregateArgs> = {
        [P in keyof T & keyof AggregateSplit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSplit[P]>
      : GetScalarType<T[P], AggregateSplit[P]>
  }




  export type SplitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SplitWhereInput
    orderBy?: SplitOrderByWithAggregationInput | SplitOrderByWithAggregationInput[]
    by: SplitScalarFieldEnum[] | SplitScalarFieldEnum
    having?: SplitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SplitCountAggregateInputType | true
    _avg?: SplitAvgAggregateInputType
    _sum?: SplitSumAggregateInputType
    _min?: SplitMinAggregateInputType
    _max?: SplitMaxAggregateInputType
  }

  export type SplitGroupByOutputType = {
    id: string
    expenseId: string
    userId: string
    share: number
    _count: SplitCountAggregateOutputType | null
    _avg: SplitAvgAggregateOutputType | null
    _sum: SplitSumAggregateOutputType | null
    _min: SplitMinAggregateOutputType | null
    _max: SplitMaxAggregateOutputType | null
  }

  type GetSplitGroupByPayload<T extends SplitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SplitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SplitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SplitGroupByOutputType[P]>
            : GetScalarType<T[P], SplitGroupByOutputType[P]>
        }
      >
    >


  export type SplitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    share?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["split"]>

  export type SplitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    share?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["split"]>

  export type SplitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    share?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["split"]>

  export type SplitSelectScalar = {
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    share?: boolean
  }

  export type SplitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expenseId" | "userId" | "share", ExtArgs["result"]["split"]>
  export type SplitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SplitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SplitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SplitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Split"
    objects: {
      expense: Prisma.$ExpensePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expenseId: string
      userId: string
      share: number
    }, ExtArgs["result"]["split"]>
    composites: {}
  }

  type SplitGetPayload<S extends boolean | null | undefined | SplitDefaultArgs> = $Result.GetResult<Prisma.$SplitPayload, S>

  type SplitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SplitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SplitCountAggregateInputType | true
    }

  export interface SplitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Split'], meta: { name: 'Split' } }
    /**
     * Find zero or one Split that matches the filter.
     * @param {SplitFindUniqueArgs} args - Arguments to find a Split
     * @example
     * // Get one Split
     * const split = await prisma.split.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SplitFindUniqueArgs>(args: SelectSubset<T, SplitFindUniqueArgs<ExtArgs>>): Prisma__SplitClient<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Split that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SplitFindUniqueOrThrowArgs} args - Arguments to find a Split
     * @example
     * // Get one Split
     * const split = await prisma.split.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SplitFindUniqueOrThrowArgs>(args: SelectSubset<T, SplitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SplitClient<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Split that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitFindFirstArgs} args - Arguments to find a Split
     * @example
     * // Get one Split
     * const split = await prisma.split.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SplitFindFirstArgs>(args?: SelectSubset<T, SplitFindFirstArgs<ExtArgs>>): Prisma__SplitClient<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Split that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitFindFirstOrThrowArgs} args - Arguments to find a Split
     * @example
     * // Get one Split
     * const split = await prisma.split.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SplitFindFirstOrThrowArgs>(args?: SelectSubset<T, SplitFindFirstOrThrowArgs<ExtArgs>>): Prisma__SplitClient<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Splits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Splits
     * const splits = await prisma.split.findMany()
     * 
     * // Get first 10 Splits
     * const splits = await prisma.split.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const splitWithIdOnly = await prisma.split.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SplitFindManyArgs>(args?: SelectSubset<T, SplitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Split.
     * @param {SplitCreateArgs} args - Arguments to create a Split.
     * @example
     * // Create one Split
     * const Split = await prisma.split.create({
     *   data: {
     *     // ... data to create a Split
     *   }
     * })
     * 
     */
    create<T extends SplitCreateArgs>(args: SelectSubset<T, SplitCreateArgs<ExtArgs>>): Prisma__SplitClient<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Splits.
     * @param {SplitCreateManyArgs} args - Arguments to create many Splits.
     * @example
     * // Create many Splits
     * const split = await prisma.split.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SplitCreateManyArgs>(args?: SelectSubset<T, SplitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Splits and returns the data saved in the database.
     * @param {SplitCreateManyAndReturnArgs} args - Arguments to create many Splits.
     * @example
     * // Create many Splits
     * const split = await prisma.split.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Splits and only return the `id`
     * const splitWithIdOnly = await prisma.split.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SplitCreateManyAndReturnArgs>(args?: SelectSubset<T, SplitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Split.
     * @param {SplitDeleteArgs} args - Arguments to delete one Split.
     * @example
     * // Delete one Split
     * const Split = await prisma.split.delete({
     *   where: {
     *     // ... filter to delete one Split
     *   }
     * })
     * 
     */
    delete<T extends SplitDeleteArgs>(args: SelectSubset<T, SplitDeleteArgs<ExtArgs>>): Prisma__SplitClient<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Split.
     * @param {SplitUpdateArgs} args - Arguments to update one Split.
     * @example
     * // Update one Split
     * const split = await prisma.split.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SplitUpdateArgs>(args: SelectSubset<T, SplitUpdateArgs<ExtArgs>>): Prisma__SplitClient<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Splits.
     * @param {SplitDeleteManyArgs} args - Arguments to filter Splits to delete.
     * @example
     * // Delete a few Splits
     * const { count } = await prisma.split.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SplitDeleteManyArgs>(args?: SelectSubset<T, SplitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Splits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Splits
     * const split = await prisma.split.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SplitUpdateManyArgs>(args: SelectSubset<T, SplitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Splits and returns the data updated in the database.
     * @param {SplitUpdateManyAndReturnArgs} args - Arguments to update many Splits.
     * @example
     * // Update many Splits
     * const split = await prisma.split.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Splits and only return the `id`
     * const splitWithIdOnly = await prisma.split.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SplitUpdateManyAndReturnArgs>(args: SelectSubset<T, SplitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Split.
     * @param {SplitUpsertArgs} args - Arguments to update or create a Split.
     * @example
     * // Update or create a Split
     * const split = await prisma.split.upsert({
     *   create: {
     *     // ... data to create a Split
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Split we want to update
     *   }
     * })
     */
    upsert<T extends SplitUpsertArgs>(args: SelectSubset<T, SplitUpsertArgs<ExtArgs>>): Prisma__SplitClient<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Splits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitCountArgs} args - Arguments to filter Splits to count.
     * @example
     * // Count the number of Splits
     * const count = await prisma.split.count({
     *   where: {
     *     // ... the filter for the Splits we want to count
     *   }
     * })
    **/
    count<T extends SplitCountArgs>(
      args?: Subset<T, SplitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SplitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Split.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SplitAggregateArgs>(args: Subset<T, SplitAggregateArgs>): Prisma.PrismaPromise<GetSplitAggregateType<T>>

    /**
     * Group by Split.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SplitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SplitGroupByArgs['orderBy'] }
        : { orderBy?: SplitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SplitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSplitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Split model
   */
  readonly fields: SplitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Split.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SplitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expense<T extends ExpenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseDefaultArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Split model
   */
  interface SplitFieldRefs {
    readonly id: FieldRef<"Split", 'String'>
    readonly expenseId: FieldRef<"Split", 'String'>
    readonly userId: FieldRef<"Split", 'String'>
    readonly share: FieldRef<"Split", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Split findUnique
   */
  export type SplitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    /**
     * Filter, which Split to fetch.
     */
    where: SplitWhereUniqueInput
  }

  /**
   * Split findUniqueOrThrow
   */
  export type SplitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    /**
     * Filter, which Split to fetch.
     */
    where: SplitWhereUniqueInput
  }

  /**
   * Split findFirst
   */
  export type SplitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    /**
     * Filter, which Split to fetch.
     */
    where?: SplitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Splits to fetch.
     */
    orderBy?: SplitOrderByWithRelationInput | SplitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Splits.
     */
    cursor?: SplitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Splits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Splits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Splits.
     */
    distinct?: SplitScalarFieldEnum | SplitScalarFieldEnum[]
  }

  /**
   * Split findFirstOrThrow
   */
  export type SplitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    /**
     * Filter, which Split to fetch.
     */
    where?: SplitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Splits to fetch.
     */
    orderBy?: SplitOrderByWithRelationInput | SplitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Splits.
     */
    cursor?: SplitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Splits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Splits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Splits.
     */
    distinct?: SplitScalarFieldEnum | SplitScalarFieldEnum[]
  }

  /**
   * Split findMany
   */
  export type SplitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    /**
     * Filter, which Splits to fetch.
     */
    where?: SplitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Splits to fetch.
     */
    orderBy?: SplitOrderByWithRelationInput | SplitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Splits.
     */
    cursor?: SplitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Splits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Splits.
     */
    skip?: number
    distinct?: SplitScalarFieldEnum | SplitScalarFieldEnum[]
  }

  /**
   * Split create
   */
  export type SplitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    /**
     * The data needed to create a Split.
     */
    data: XOR<SplitCreateInput, SplitUncheckedCreateInput>
  }

  /**
   * Split createMany
   */
  export type SplitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Splits.
     */
    data: SplitCreateManyInput | SplitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Split createManyAndReturn
   */
  export type SplitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * The data used to create many Splits.
     */
    data: SplitCreateManyInput | SplitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Split update
   */
  export type SplitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    /**
     * The data needed to update a Split.
     */
    data: XOR<SplitUpdateInput, SplitUncheckedUpdateInput>
    /**
     * Choose, which Split to update.
     */
    where: SplitWhereUniqueInput
  }

  /**
   * Split updateMany
   */
  export type SplitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Splits.
     */
    data: XOR<SplitUpdateManyMutationInput, SplitUncheckedUpdateManyInput>
    /**
     * Filter which Splits to update
     */
    where?: SplitWhereInput
    /**
     * Limit how many Splits to update.
     */
    limit?: number
  }

  /**
   * Split updateManyAndReturn
   */
  export type SplitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * The data used to update Splits.
     */
    data: XOR<SplitUpdateManyMutationInput, SplitUncheckedUpdateManyInput>
    /**
     * Filter which Splits to update
     */
    where?: SplitWhereInput
    /**
     * Limit how many Splits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Split upsert
   */
  export type SplitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    /**
     * The filter to search for the Split to update in case it exists.
     */
    where: SplitWhereUniqueInput
    /**
     * In case the Split found by the `where` argument doesn't exist, create a new Split with this data.
     */
    create: XOR<SplitCreateInput, SplitUncheckedCreateInput>
    /**
     * In case the Split was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SplitUpdateInput, SplitUncheckedUpdateInput>
  }

  /**
   * Split delete
   */
  export type SplitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    /**
     * Filter which Split to delete.
     */
    where: SplitWhereUniqueInput
  }

  /**
   * Split deleteMany
   */
  export type SplitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Splits to delete
     */
    where?: SplitWhereInput
    /**
     * Limit how many Splits to delete.
     */
    limit?: number
  }

  /**
   * Split without action
   */
  export type SplitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
  }


  /**
   * Model Settlement
   */

  export type AggregateSettlement = {
    _count: SettlementCountAggregateOutputType | null
    _avg: SettlementAvgAggregateOutputType | null
    _sum: SettlementSumAggregateOutputType | null
    _min: SettlementMinAggregateOutputType | null
    _max: SettlementMaxAggregateOutputType | null
  }

  export type SettlementAvgAggregateOutputType = {
    amount: number | null
  }

  export type SettlementSumAggregateOutputType = {
    amount: number | null
  }

  export type SettlementMinAggregateOutputType = {
    id: string | null
    fromId: string | null
    toId: string | null
    amount: number | null
    groupId: string | null
    createdAt: Date | null
  }

  export type SettlementMaxAggregateOutputType = {
    id: string | null
    fromId: string | null
    toId: string | null
    amount: number | null
    groupId: string | null
    createdAt: Date | null
  }

  export type SettlementCountAggregateOutputType = {
    id: number
    fromId: number
    toId: number
    amount: number
    groupId: number
    createdAt: number
    _all: number
  }


  export type SettlementAvgAggregateInputType = {
    amount?: true
  }

  export type SettlementSumAggregateInputType = {
    amount?: true
  }

  export type SettlementMinAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    amount?: true
    groupId?: true
    createdAt?: true
  }

  export type SettlementMaxAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    amount?: true
    groupId?: true
    createdAt?: true
  }

  export type SettlementCountAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    amount?: true
    groupId?: true
    createdAt?: true
    _all?: true
  }

  export type SettlementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settlement to aggregate.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settlements
    **/
    _count?: true | SettlementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettlementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettlementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettlementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettlementMaxAggregateInputType
  }

  export type GetSettlementAggregateType<T extends SettlementAggregateArgs> = {
        [P in keyof T & keyof AggregateSettlement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettlement[P]>
      : GetScalarType<T[P], AggregateSettlement[P]>
  }




  export type SettlementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementWhereInput
    orderBy?: SettlementOrderByWithAggregationInput | SettlementOrderByWithAggregationInput[]
    by: SettlementScalarFieldEnum[] | SettlementScalarFieldEnum
    having?: SettlementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettlementCountAggregateInputType | true
    _avg?: SettlementAvgAggregateInputType
    _sum?: SettlementSumAggregateInputType
    _min?: SettlementMinAggregateInputType
    _max?: SettlementMaxAggregateInputType
  }

  export type SettlementGroupByOutputType = {
    id: string
    fromId: string
    toId: string
    amount: number
    groupId: string
    createdAt: Date
    _count: SettlementCountAggregateOutputType | null
    _avg: SettlementAvgAggregateOutputType | null
    _sum: SettlementSumAggregateOutputType | null
    _min: SettlementMinAggregateOutputType | null
    _max: SettlementMaxAggregateOutputType | null
  }

  type GetSettlementGroupByPayload<T extends SettlementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettlementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettlementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettlementGroupByOutputType[P]>
            : GetScalarType<T[P], SettlementGroupByOutputType[P]>
        }
      >
    >


  export type SettlementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromId?: boolean
    toId?: boolean
    amount?: boolean
    groupId?: boolean
    createdAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settlement"]>

  export type SettlementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromId?: boolean
    toId?: boolean
    amount?: boolean
    groupId?: boolean
    createdAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settlement"]>

  export type SettlementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromId?: boolean
    toId?: boolean
    amount?: boolean
    groupId?: boolean
    createdAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settlement"]>

  export type SettlementSelectScalar = {
    id?: boolean
    fromId?: boolean
    toId?: boolean
    amount?: boolean
    groupId?: boolean
    createdAt?: boolean
  }

  export type SettlementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromId" | "toId" | "amount" | "groupId" | "createdAt", ExtArgs["result"]["settlement"]>
  export type SettlementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SettlementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SettlementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SettlementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settlement"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      from: Prisma.$UserPayload<ExtArgs>
      to: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromId: string
      toId: string
      amount: number
      groupId: string
      createdAt: Date
    }, ExtArgs["result"]["settlement"]>
    composites: {}
  }

  type SettlementGetPayload<S extends boolean | null | undefined | SettlementDefaultArgs> = $Result.GetResult<Prisma.$SettlementPayload, S>

  type SettlementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettlementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettlementCountAggregateInputType | true
    }

  export interface SettlementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settlement'], meta: { name: 'Settlement' } }
    /**
     * Find zero or one Settlement that matches the filter.
     * @param {SettlementFindUniqueArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettlementFindUniqueArgs>(args: SelectSubset<T, SettlementFindUniqueArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settlement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettlementFindUniqueOrThrowArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettlementFindUniqueOrThrowArgs>(args: SelectSubset<T, SettlementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settlement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementFindFirstArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettlementFindFirstArgs>(args?: SelectSubset<T, SettlementFindFirstArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settlement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementFindFirstOrThrowArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettlementFindFirstOrThrowArgs>(args?: SelectSubset<T, SettlementFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settlements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settlements
     * const settlements = await prisma.settlement.findMany()
     * 
     * // Get first 10 Settlements
     * const settlements = await prisma.settlement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settlementWithIdOnly = await prisma.settlement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettlementFindManyArgs>(args?: SelectSubset<T, SettlementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settlement.
     * @param {SettlementCreateArgs} args - Arguments to create a Settlement.
     * @example
     * // Create one Settlement
     * const Settlement = await prisma.settlement.create({
     *   data: {
     *     // ... data to create a Settlement
     *   }
     * })
     * 
     */
    create<T extends SettlementCreateArgs>(args: SelectSubset<T, SettlementCreateArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settlements.
     * @param {SettlementCreateManyArgs} args - Arguments to create many Settlements.
     * @example
     * // Create many Settlements
     * const settlement = await prisma.settlement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettlementCreateManyArgs>(args?: SelectSubset<T, SettlementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settlements and returns the data saved in the database.
     * @param {SettlementCreateManyAndReturnArgs} args - Arguments to create many Settlements.
     * @example
     * // Create many Settlements
     * const settlement = await prisma.settlement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settlements and only return the `id`
     * const settlementWithIdOnly = await prisma.settlement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettlementCreateManyAndReturnArgs>(args?: SelectSubset<T, SettlementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settlement.
     * @param {SettlementDeleteArgs} args - Arguments to delete one Settlement.
     * @example
     * // Delete one Settlement
     * const Settlement = await prisma.settlement.delete({
     *   where: {
     *     // ... filter to delete one Settlement
     *   }
     * })
     * 
     */
    delete<T extends SettlementDeleteArgs>(args: SelectSubset<T, SettlementDeleteArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settlement.
     * @param {SettlementUpdateArgs} args - Arguments to update one Settlement.
     * @example
     * // Update one Settlement
     * const settlement = await prisma.settlement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettlementUpdateArgs>(args: SelectSubset<T, SettlementUpdateArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settlements.
     * @param {SettlementDeleteManyArgs} args - Arguments to filter Settlements to delete.
     * @example
     * // Delete a few Settlements
     * const { count } = await prisma.settlement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettlementDeleteManyArgs>(args?: SelectSubset<T, SettlementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settlements
     * const settlement = await prisma.settlement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettlementUpdateManyArgs>(args: SelectSubset<T, SettlementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settlements and returns the data updated in the database.
     * @param {SettlementUpdateManyAndReturnArgs} args - Arguments to update many Settlements.
     * @example
     * // Update many Settlements
     * const settlement = await prisma.settlement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settlements and only return the `id`
     * const settlementWithIdOnly = await prisma.settlement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettlementUpdateManyAndReturnArgs>(args: SelectSubset<T, SettlementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settlement.
     * @param {SettlementUpsertArgs} args - Arguments to update or create a Settlement.
     * @example
     * // Update or create a Settlement
     * const settlement = await prisma.settlement.upsert({
     *   create: {
     *     // ... data to create a Settlement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settlement we want to update
     *   }
     * })
     */
    upsert<T extends SettlementUpsertArgs>(args: SelectSubset<T, SettlementUpsertArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementCountArgs} args - Arguments to filter Settlements to count.
     * @example
     * // Count the number of Settlements
     * const count = await prisma.settlement.count({
     *   where: {
     *     // ... the filter for the Settlements we want to count
     *   }
     * })
    **/
    count<T extends SettlementCountArgs>(
      args?: Subset<T, SettlementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettlementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settlement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettlementAggregateArgs>(args: Subset<T, SettlementAggregateArgs>): Prisma.PrismaPromise<GetSettlementAggregateType<T>>

    /**
     * Group by Settlement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettlementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettlementGroupByArgs['orderBy'] }
        : { orderBy?: SettlementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettlementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettlementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settlement model
   */
  readonly fields: SettlementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settlement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettlementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    from<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    to<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Settlement model
   */
  interface SettlementFieldRefs {
    readonly id: FieldRef<"Settlement", 'String'>
    readonly fromId: FieldRef<"Settlement", 'String'>
    readonly toId: FieldRef<"Settlement", 'String'>
    readonly amount: FieldRef<"Settlement", 'Float'>
    readonly groupId: FieldRef<"Settlement", 'String'>
    readonly createdAt: FieldRef<"Settlement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Settlement findUnique
   */
  export type SettlementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement findUniqueOrThrow
   */
  export type SettlementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement findFirst
   */
  export type SettlementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settlements.
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settlements.
     */
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * Settlement findFirstOrThrow
   */
  export type SettlementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settlements.
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settlements.
     */
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * Settlement findMany
   */
  export type SettlementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlements to fetch.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settlements.
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * Settlement create
   */
  export type SettlementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * The data needed to create a Settlement.
     */
    data: XOR<SettlementCreateInput, SettlementUncheckedCreateInput>
  }

  /**
   * Settlement createMany
   */
  export type SettlementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settlements.
     */
    data: SettlementCreateManyInput | SettlementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settlement createManyAndReturn
   */
  export type SettlementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * The data used to create many Settlements.
     */
    data: SettlementCreateManyInput | SettlementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settlement update
   */
  export type SettlementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * The data needed to update a Settlement.
     */
    data: XOR<SettlementUpdateInput, SettlementUncheckedUpdateInput>
    /**
     * Choose, which Settlement to update.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement updateMany
   */
  export type SettlementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settlements.
     */
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyInput>
    /**
     * Filter which Settlements to update
     */
    where?: SettlementWhereInput
    /**
     * Limit how many Settlements to update.
     */
    limit?: number
  }

  /**
   * Settlement updateManyAndReturn
   */
  export type SettlementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * The data used to update Settlements.
     */
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyInput>
    /**
     * Filter which Settlements to update
     */
    where?: SettlementWhereInput
    /**
     * Limit how many Settlements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settlement upsert
   */
  export type SettlementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * The filter to search for the Settlement to update in case it exists.
     */
    where: SettlementWhereUniqueInput
    /**
     * In case the Settlement found by the `where` argument doesn't exist, create a new Settlement with this data.
     */
    create: XOR<SettlementCreateInput, SettlementUncheckedCreateInput>
    /**
     * In case the Settlement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettlementUpdateInput, SettlementUncheckedUpdateInput>
  }

  /**
   * Settlement delete
   */
  export type SettlementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter which Settlement to delete.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement deleteMany
   */
  export type SettlementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settlements to delete
     */
    where?: SettlementWhereInput
    /**
     * Limit how many Settlements to delete.
     */
    limit?: number
  }

  /**
   * Settlement without action
   */
  export type SettlementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const GroupMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    groupId: 'groupId',
    role: 'role'
  };

  export type GroupMemberScalarFieldEnum = (typeof GroupMemberScalarFieldEnum)[keyof typeof GroupMemberScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    description: 'description',
    amount: 'amount',
    paidById: 'paidById',
    groupId: 'groupId',
    createdAt: 'createdAt'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const SplitScalarFieldEnum: {
    id: 'id',
    expenseId: 'expenseId',
    userId: 'userId',
    share: 'share'
  };

  export type SplitScalarFieldEnum = (typeof SplitScalarFieldEnum)[keyof typeof SplitScalarFieldEnum]


  export const SettlementScalarFieldEnum: {
    id: 'id',
    fromId: 'fromId',
    toId: 'toId',
    amount: 'amount',
    groupId: 'groupId',
    createdAt: 'createdAt'
  };

  export type SettlementScalarFieldEnum = (typeof SettlementScalarFieldEnum)[keyof typeof SettlementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    groups?: GroupMemberListRelationFilter
    expenses?: ExpenseListRelationFilter
    splits?: SplitListRelationFilter
    settlementsFrom?: SettlementListRelationFilter
    settlementsTo?: SettlementListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    groups?: GroupMemberOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
    splits?: SplitOrderByRelationAggregateInput
    settlementsFrom?: SettlementOrderByRelationAggregateInput
    settlementsTo?: SettlementOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    groups?: GroupMemberListRelationFilter
    expenses?: ExpenseListRelationFilter
    splits?: SplitListRelationFilter
    settlementsFrom?: SettlementListRelationFilter
    settlementsTo?: SettlementListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    members?: GroupMemberListRelationFilter
    expenses?: ExpenseListRelationFilter
    settlements?: SettlementListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    members?: GroupMemberOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
    settlements?: SettlementOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    members?: GroupMemberListRelationFilter
    expenses?: ExpenseListRelationFilter
    settlements?: SettlementListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type GroupMemberWhereInput = {
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    id?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    groupId?: StringFilter<"GroupMember"> | string
    role?: StringFilter<"GroupMember"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type GroupMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    role?: SortOrder
    user?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type GroupMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    userId?: StringFilter<"GroupMember"> | string
    groupId?: StringFilter<"GroupMember"> | string
    role?: StringFilter<"GroupMember"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "id">

  export type GroupMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    role?: SortOrder
    _count?: GroupMemberCountOrderByAggregateInput
    _max?: GroupMemberMaxOrderByAggregateInput
    _min?: GroupMemberMinOrderByAggregateInput
  }

  export type GroupMemberScalarWhereWithAggregatesInput = {
    AND?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    OR?: GroupMemberScalarWhereWithAggregatesInput[]
    NOT?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupMember"> | string
    userId?: StringWithAggregatesFilter<"GroupMember"> | string
    groupId?: StringWithAggregatesFilter<"GroupMember"> | string
    role?: StringWithAggregatesFilter<"GroupMember"> | string
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: StringFilter<"Expense"> | string
    description?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    paidById?: StringFilter<"Expense"> | string
    groupId?: StringFilter<"Expense"> | string
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    paidBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    splits?: SplitListRelationFilter
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    paidById?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    paidBy?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
    splits?: SplitOrderByRelationAggregateInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    description?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    paidById?: StringFilter<"Expense"> | string
    groupId?: StringFilter<"Expense"> | string
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    paidBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    splits?: SplitListRelationFilter
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    paidById?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expense"> | string
    description?: StringWithAggregatesFilter<"Expense"> | string
    amount?: FloatWithAggregatesFilter<"Expense"> | number
    paidById?: StringWithAggregatesFilter<"Expense"> | string
    groupId?: StringWithAggregatesFilter<"Expense"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
  }

  export type SplitWhereInput = {
    AND?: SplitWhereInput | SplitWhereInput[]
    OR?: SplitWhereInput[]
    NOT?: SplitWhereInput | SplitWhereInput[]
    id?: StringFilter<"Split"> | string
    expenseId?: StringFilter<"Split"> | string
    userId?: StringFilter<"Split"> | string
    share?: FloatFilter<"Split"> | number
    expense?: XOR<ExpenseScalarRelationFilter, ExpenseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SplitOrderByWithRelationInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    share?: SortOrder
    expense?: ExpenseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SplitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SplitWhereInput | SplitWhereInput[]
    OR?: SplitWhereInput[]
    NOT?: SplitWhereInput | SplitWhereInput[]
    expenseId?: StringFilter<"Split"> | string
    userId?: StringFilter<"Split"> | string
    share?: FloatFilter<"Split"> | number
    expense?: XOR<ExpenseScalarRelationFilter, ExpenseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SplitOrderByWithAggregationInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    share?: SortOrder
    _count?: SplitCountOrderByAggregateInput
    _avg?: SplitAvgOrderByAggregateInput
    _max?: SplitMaxOrderByAggregateInput
    _min?: SplitMinOrderByAggregateInput
    _sum?: SplitSumOrderByAggregateInput
  }

  export type SplitScalarWhereWithAggregatesInput = {
    AND?: SplitScalarWhereWithAggregatesInput | SplitScalarWhereWithAggregatesInput[]
    OR?: SplitScalarWhereWithAggregatesInput[]
    NOT?: SplitScalarWhereWithAggregatesInput | SplitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Split"> | string
    expenseId?: StringWithAggregatesFilter<"Split"> | string
    userId?: StringWithAggregatesFilter<"Split"> | string
    share?: FloatWithAggregatesFilter<"Split"> | number
  }

  export type SettlementWhereInput = {
    AND?: SettlementWhereInput | SettlementWhereInput[]
    OR?: SettlementWhereInput[]
    NOT?: SettlementWhereInput | SettlementWhereInput[]
    id?: StringFilter<"Settlement"> | string
    fromId?: StringFilter<"Settlement"> | string
    toId?: StringFilter<"Settlement"> | string
    amount?: FloatFilter<"Settlement"> | number
    groupId?: StringFilter<"Settlement"> | string
    createdAt?: DateTimeFilter<"Settlement"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    from?: XOR<UserScalarRelationFilter, UserWhereInput>
    to?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SettlementOrderByWithRelationInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    amount?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    group?: GroupOrderByWithRelationInput
    from?: UserOrderByWithRelationInput
    to?: UserOrderByWithRelationInput
  }

  export type SettlementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SettlementWhereInput | SettlementWhereInput[]
    OR?: SettlementWhereInput[]
    NOT?: SettlementWhereInput | SettlementWhereInput[]
    fromId?: StringFilter<"Settlement"> | string
    toId?: StringFilter<"Settlement"> | string
    amount?: FloatFilter<"Settlement"> | number
    groupId?: StringFilter<"Settlement"> | string
    createdAt?: DateTimeFilter<"Settlement"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    from?: XOR<UserScalarRelationFilter, UserWhereInput>
    to?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SettlementOrderByWithAggregationInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    amount?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    _count?: SettlementCountOrderByAggregateInput
    _avg?: SettlementAvgOrderByAggregateInput
    _max?: SettlementMaxOrderByAggregateInput
    _min?: SettlementMinOrderByAggregateInput
    _sum?: SettlementSumOrderByAggregateInput
  }

  export type SettlementScalarWhereWithAggregatesInput = {
    AND?: SettlementScalarWhereWithAggregatesInput | SettlementScalarWhereWithAggregatesInput[]
    OR?: SettlementScalarWhereWithAggregatesInput[]
    NOT?: SettlementScalarWhereWithAggregatesInput | SettlementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Settlement"> | string
    fromId?: StringWithAggregatesFilter<"Settlement"> | string
    toId?: StringWithAggregatesFilter<"Settlement"> | string
    amount?: FloatWithAggregatesFilter<"Settlement"> | number
    groupId?: StringWithAggregatesFilter<"Settlement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Settlement"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    groups?: GroupMemberCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutPaidByInput
    splits?: SplitCreateNestedManyWithoutUserInput
    settlementsFrom?: SettlementCreateNestedManyWithoutFromInput
    settlementsTo?: SettlementCreateNestedManyWithoutToInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    groups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutPaidByInput
    splits?: SplitUncheckedCreateNestedManyWithoutUserInput
    settlementsFrom?: SettlementUncheckedCreateNestedManyWithoutFromInput
    settlementsTo?: SettlementUncheckedCreateNestedManyWithoutToInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    groups?: GroupMemberUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutPaidByNestedInput
    splits?: SplitUpdateManyWithoutUserNestedInput
    settlementsFrom?: SettlementUpdateManyWithoutFromNestedInput
    settlementsTo?: SettlementUpdateManyWithoutToNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    groups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutPaidByNestedInput
    splits?: SplitUncheckedUpdateManyWithoutUserNestedInput
    settlementsFrom?: SettlementUncheckedUpdateManyWithoutFromNestedInput
    settlementsTo?: SettlementUncheckedUpdateManyWithoutToNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    expenses?: ExpenseCreateNestedManyWithoutGroupInput
    settlements?: SettlementCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    expenses?: ExpenseUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateInput = {
    id?: string
    role: string
    user: UserCreateNestedOneWithoutGroupsInput
    group: GroupCreateNestedOneWithoutMembersInput
  }

  export type GroupMemberUncheckedCreateInput = {
    id?: string
    userId: string
    groupId: string
    role: string
  }

  export type GroupMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMemberCreateManyInput = {
    id?: string
    userId: string
    groupId: string
    role: string
  }

  export type GroupMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseCreateInput = {
    id?: string
    description: string
    amount: number
    createdAt?: Date | string
    paidBy: UserCreateNestedOneWithoutExpensesInput
    group: GroupCreateNestedOneWithoutExpensesInput
    splits?: SplitCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    description: string
    amount: number
    paidById: string
    groupId: string
    createdAt?: Date | string
    splits?: SplitUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidBy?: UserUpdateOneRequiredWithoutExpensesNestedInput
    group?: GroupUpdateOneRequiredWithoutExpensesNestedInput
    splits?: SplitUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidById?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    splits?: SplitUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseCreateManyInput = {
    id?: string
    description: string
    amount: number
    paidById: string
    groupId: string
    createdAt?: Date | string
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidById?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SplitCreateInput = {
    id?: string
    share: number
    expense: ExpenseCreateNestedOneWithoutSplitsInput
    user: UserCreateNestedOneWithoutSplitsInput
  }

  export type SplitUncheckedCreateInput = {
    id?: string
    expenseId: string
    userId: string
    share: number
  }

  export type SplitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    share?: FloatFieldUpdateOperationsInput | number
    expense?: ExpenseUpdateOneRequiredWithoutSplitsNestedInput
    user?: UserUpdateOneRequiredWithoutSplitsNestedInput
  }

  export type SplitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    share?: FloatFieldUpdateOperationsInput | number
  }

  export type SplitCreateManyInput = {
    id?: string
    expenseId: string
    userId: string
    share: number
  }

  export type SplitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    share?: FloatFieldUpdateOperationsInput | number
  }

  export type SplitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    share?: FloatFieldUpdateOperationsInput | number
  }

  export type SettlementCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    group: GroupCreateNestedOneWithoutSettlementsInput
    from: UserCreateNestedOneWithoutSettlementsFromInput
    to: UserCreateNestedOneWithoutSettlementsToInput
  }

  export type SettlementUncheckedCreateInput = {
    id?: string
    fromId: string
    toId: string
    amount: number
    groupId: string
    createdAt?: Date | string
  }

  export type SettlementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutSettlementsNestedInput
    from?: UserUpdateOneRequiredWithoutSettlementsFromNestedInput
    to?: UserUpdateOneRequiredWithoutSettlementsToNestedInput
  }

  export type SettlementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementCreateManyInput = {
    id?: string
    fromId: string
    toId: string
    amount: number
    groupId: string
    createdAt?: Date | string
  }

  export type SettlementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type GroupMemberListRelationFilter = {
    every?: GroupMemberWhereInput
    some?: GroupMemberWhereInput
    none?: GroupMemberWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type SplitListRelationFilter = {
    every?: SplitWhereInput
    some?: SplitWhereInput
    none?: SplitWhereInput
  }

  export type SettlementListRelationFilter = {
    every?: SettlementWhereInput
    some?: SettlementWhereInput
    none?: SettlementWhereInput
  }

  export type GroupMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SplitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SettlementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type GroupMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    role?: SortOrder
  }

  export type GroupMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    role?: SortOrder
  }

  export type GroupMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    role?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    paidById?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    paidById?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    paidById?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ExpenseScalarRelationFilter = {
    is?: ExpenseWhereInput
    isNot?: ExpenseWhereInput
  }

  export type SplitCountOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    share?: SortOrder
  }

  export type SplitAvgOrderByAggregateInput = {
    share?: SortOrder
  }

  export type SplitMaxOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    share?: SortOrder
  }

  export type SplitMinOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    share?: SortOrder
  }

  export type SplitSumOrderByAggregateInput = {
    share?: SortOrder
  }

  export type SettlementCountOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    amount?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
  }

  export type SettlementAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SettlementMaxOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    amount?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
  }

  export type SettlementMinOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    amount?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
  }

  export type SettlementSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type GroupMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutPaidByInput = {
    create?: XOR<ExpenseCreateWithoutPaidByInput, ExpenseUncheckedCreateWithoutPaidByInput> | ExpenseCreateWithoutPaidByInput[] | ExpenseUncheckedCreateWithoutPaidByInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPaidByInput | ExpenseCreateOrConnectWithoutPaidByInput[]
    createMany?: ExpenseCreateManyPaidByInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type SplitCreateNestedManyWithoutUserInput = {
    create?: XOR<SplitCreateWithoutUserInput, SplitUncheckedCreateWithoutUserInput> | SplitCreateWithoutUserInput[] | SplitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SplitCreateOrConnectWithoutUserInput | SplitCreateOrConnectWithoutUserInput[]
    createMany?: SplitCreateManyUserInputEnvelope
    connect?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
  }

  export type SettlementCreateNestedManyWithoutFromInput = {
    create?: XOR<SettlementCreateWithoutFromInput, SettlementUncheckedCreateWithoutFromInput> | SettlementCreateWithoutFromInput[] | SettlementUncheckedCreateWithoutFromInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutFromInput | SettlementCreateOrConnectWithoutFromInput[]
    createMany?: SettlementCreateManyFromInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type SettlementCreateNestedManyWithoutToInput = {
    create?: XOR<SettlementCreateWithoutToInput, SettlementUncheckedCreateWithoutToInput> | SettlementCreateWithoutToInput[] | SettlementUncheckedCreateWithoutToInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutToInput | SettlementCreateOrConnectWithoutToInput[]
    createMany?: SettlementCreateManyToInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutPaidByInput = {
    create?: XOR<ExpenseCreateWithoutPaidByInput, ExpenseUncheckedCreateWithoutPaidByInput> | ExpenseCreateWithoutPaidByInput[] | ExpenseUncheckedCreateWithoutPaidByInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPaidByInput | ExpenseCreateOrConnectWithoutPaidByInput[]
    createMany?: ExpenseCreateManyPaidByInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type SplitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SplitCreateWithoutUserInput, SplitUncheckedCreateWithoutUserInput> | SplitCreateWithoutUserInput[] | SplitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SplitCreateOrConnectWithoutUserInput | SplitCreateOrConnectWithoutUserInput[]
    createMany?: SplitCreateManyUserInputEnvelope
    connect?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
  }

  export type SettlementUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<SettlementCreateWithoutFromInput, SettlementUncheckedCreateWithoutFromInput> | SettlementCreateWithoutFromInput[] | SettlementUncheckedCreateWithoutFromInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutFromInput | SettlementCreateOrConnectWithoutFromInput[]
    createMany?: SettlementCreateManyFromInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type SettlementUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<SettlementCreateWithoutToInput, SettlementUncheckedCreateWithoutToInput> | SettlementCreateWithoutToInput[] | SettlementUncheckedCreateWithoutToInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutToInput | SettlementCreateOrConnectWithoutToInput[]
    createMany?: SettlementCreateManyToInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type GroupMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutPaidByNestedInput = {
    create?: XOR<ExpenseCreateWithoutPaidByInput, ExpenseUncheckedCreateWithoutPaidByInput> | ExpenseCreateWithoutPaidByInput[] | ExpenseUncheckedCreateWithoutPaidByInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPaidByInput | ExpenseCreateOrConnectWithoutPaidByInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutPaidByInput | ExpenseUpsertWithWhereUniqueWithoutPaidByInput[]
    createMany?: ExpenseCreateManyPaidByInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutPaidByInput | ExpenseUpdateWithWhereUniqueWithoutPaidByInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutPaidByInput | ExpenseUpdateManyWithWhereWithoutPaidByInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type SplitUpdateManyWithoutUserNestedInput = {
    create?: XOR<SplitCreateWithoutUserInput, SplitUncheckedCreateWithoutUserInput> | SplitCreateWithoutUserInput[] | SplitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SplitCreateOrConnectWithoutUserInput | SplitCreateOrConnectWithoutUserInput[]
    upsert?: SplitUpsertWithWhereUniqueWithoutUserInput | SplitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SplitCreateManyUserInputEnvelope
    set?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    disconnect?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    delete?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    connect?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    update?: SplitUpdateWithWhereUniqueWithoutUserInput | SplitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SplitUpdateManyWithWhereWithoutUserInput | SplitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SplitScalarWhereInput | SplitScalarWhereInput[]
  }

  export type SettlementUpdateManyWithoutFromNestedInput = {
    create?: XOR<SettlementCreateWithoutFromInput, SettlementUncheckedCreateWithoutFromInput> | SettlementCreateWithoutFromInput[] | SettlementUncheckedCreateWithoutFromInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutFromInput | SettlementCreateOrConnectWithoutFromInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutFromInput | SettlementUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: SettlementCreateManyFromInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutFromInput | SettlementUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutFromInput | SettlementUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type SettlementUpdateManyWithoutToNestedInput = {
    create?: XOR<SettlementCreateWithoutToInput, SettlementUncheckedCreateWithoutToInput> | SettlementCreateWithoutToInput[] | SettlementUncheckedCreateWithoutToInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutToInput | SettlementCreateOrConnectWithoutToInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutToInput | SettlementUpsertWithWhereUniqueWithoutToInput[]
    createMany?: SettlementCreateManyToInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutToInput | SettlementUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutToInput | SettlementUpdateManyWithWhereWithoutToInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutPaidByNestedInput = {
    create?: XOR<ExpenseCreateWithoutPaidByInput, ExpenseUncheckedCreateWithoutPaidByInput> | ExpenseCreateWithoutPaidByInput[] | ExpenseUncheckedCreateWithoutPaidByInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPaidByInput | ExpenseCreateOrConnectWithoutPaidByInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutPaidByInput | ExpenseUpsertWithWhereUniqueWithoutPaidByInput[]
    createMany?: ExpenseCreateManyPaidByInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutPaidByInput | ExpenseUpdateWithWhereUniqueWithoutPaidByInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutPaidByInput | ExpenseUpdateManyWithWhereWithoutPaidByInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type SplitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SplitCreateWithoutUserInput, SplitUncheckedCreateWithoutUserInput> | SplitCreateWithoutUserInput[] | SplitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SplitCreateOrConnectWithoutUserInput | SplitCreateOrConnectWithoutUserInput[]
    upsert?: SplitUpsertWithWhereUniqueWithoutUserInput | SplitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SplitCreateManyUserInputEnvelope
    set?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    disconnect?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    delete?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    connect?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    update?: SplitUpdateWithWhereUniqueWithoutUserInput | SplitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SplitUpdateManyWithWhereWithoutUserInput | SplitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SplitScalarWhereInput | SplitScalarWhereInput[]
  }

  export type SettlementUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<SettlementCreateWithoutFromInput, SettlementUncheckedCreateWithoutFromInput> | SettlementCreateWithoutFromInput[] | SettlementUncheckedCreateWithoutFromInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutFromInput | SettlementCreateOrConnectWithoutFromInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutFromInput | SettlementUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: SettlementCreateManyFromInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutFromInput | SettlementUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutFromInput | SettlementUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type SettlementUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<SettlementCreateWithoutToInput, SettlementUncheckedCreateWithoutToInput> | SettlementCreateWithoutToInput[] | SettlementUncheckedCreateWithoutToInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutToInput | SettlementCreateOrConnectWithoutToInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutToInput | SettlementUpsertWithWhereUniqueWithoutToInput[]
    createMany?: SettlementCreateManyToInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutToInput | SettlementUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutToInput | SettlementUpdateManyWithWhereWithoutToInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type GroupMemberCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutGroupInput = {
    create?: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput> | ExpenseCreateWithoutGroupInput[] | ExpenseUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutGroupInput | ExpenseCreateOrConnectWithoutGroupInput[]
    createMany?: ExpenseCreateManyGroupInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type SettlementCreateNestedManyWithoutGroupInput = {
    create?: XOR<SettlementCreateWithoutGroupInput, SettlementUncheckedCreateWithoutGroupInput> | SettlementCreateWithoutGroupInput[] | SettlementUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutGroupInput | SettlementCreateOrConnectWithoutGroupInput[]
    createMany?: SettlementCreateManyGroupInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput> | ExpenseCreateWithoutGroupInput[] | ExpenseUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutGroupInput | ExpenseCreateOrConnectWithoutGroupInput[]
    createMany?: ExpenseCreateManyGroupInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type SettlementUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<SettlementCreateWithoutGroupInput, SettlementUncheckedCreateWithoutGroupInput> | SettlementCreateWithoutGroupInput[] | SettlementUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutGroupInput | SettlementCreateOrConnectWithoutGroupInput[]
    createMany?: SettlementCreateManyGroupInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupMemberUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput> | ExpenseCreateWithoutGroupInput[] | ExpenseUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutGroupInput | ExpenseCreateOrConnectWithoutGroupInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutGroupInput | ExpenseUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ExpenseCreateManyGroupInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutGroupInput | ExpenseUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutGroupInput | ExpenseUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type SettlementUpdateManyWithoutGroupNestedInput = {
    create?: XOR<SettlementCreateWithoutGroupInput, SettlementUncheckedCreateWithoutGroupInput> | SettlementCreateWithoutGroupInput[] | SettlementUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutGroupInput | SettlementCreateOrConnectWithoutGroupInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutGroupInput | SettlementUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: SettlementCreateManyGroupInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutGroupInput | SettlementUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutGroupInput | SettlementUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput> | ExpenseCreateWithoutGroupInput[] | ExpenseUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutGroupInput | ExpenseCreateOrConnectWithoutGroupInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutGroupInput | ExpenseUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ExpenseCreateManyGroupInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutGroupInput | ExpenseUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutGroupInput | ExpenseUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type SettlementUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<SettlementCreateWithoutGroupInput, SettlementUncheckedCreateWithoutGroupInput> | SettlementCreateWithoutGroupInput[] | SettlementUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutGroupInput | SettlementCreateOrConnectWithoutGroupInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutGroupInput | SettlementUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: SettlementCreateManyGroupInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutGroupInput | SettlementUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutGroupInput | SettlementUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGroupsInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    connect?: GroupWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    upsert?: UserUpsertWithoutGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupsInput, UserUpdateWithoutGroupsInput>, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type GroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    upsert?: GroupUpsertWithoutMembersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMembersInput, GroupUpdateWithoutMembersInput>, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type UserCreateNestedOneWithoutExpensesInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutExpensesInput = {
    create?: XOR<GroupCreateWithoutExpensesInput, GroupUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutExpensesInput
    connect?: GroupWhereUniqueInput
  }

  export type SplitCreateNestedManyWithoutExpenseInput = {
    create?: XOR<SplitCreateWithoutExpenseInput, SplitUncheckedCreateWithoutExpenseInput> | SplitCreateWithoutExpenseInput[] | SplitUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: SplitCreateOrConnectWithoutExpenseInput | SplitCreateOrConnectWithoutExpenseInput[]
    createMany?: SplitCreateManyExpenseInputEnvelope
    connect?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
  }

  export type SplitUncheckedCreateNestedManyWithoutExpenseInput = {
    create?: XOR<SplitCreateWithoutExpenseInput, SplitUncheckedCreateWithoutExpenseInput> | SplitCreateWithoutExpenseInput[] | SplitUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: SplitCreateOrConnectWithoutExpenseInput | SplitCreateOrConnectWithoutExpenseInput[]
    createMany?: SplitCreateManyExpenseInputEnvelope
    connect?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    upsert?: UserUpsertWithoutExpensesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpensesInput, UserUpdateWithoutExpensesInput>, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type GroupUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<GroupCreateWithoutExpensesInput, GroupUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutExpensesInput
    upsert?: GroupUpsertWithoutExpensesInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutExpensesInput, GroupUpdateWithoutExpensesInput>, GroupUncheckedUpdateWithoutExpensesInput>
  }

  export type SplitUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<SplitCreateWithoutExpenseInput, SplitUncheckedCreateWithoutExpenseInput> | SplitCreateWithoutExpenseInput[] | SplitUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: SplitCreateOrConnectWithoutExpenseInput | SplitCreateOrConnectWithoutExpenseInput[]
    upsert?: SplitUpsertWithWhereUniqueWithoutExpenseInput | SplitUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: SplitCreateManyExpenseInputEnvelope
    set?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    disconnect?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    delete?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    connect?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    update?: SplitUpdateWithWhereUniqueWithoutExpenseInput | SplitUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: SplitUpdateManyWithWhereWithoutExpenseInput | SplitUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: SplitScalarWhereInput | SplitScalarWhereInput[]
  }

  export type SplitUncheckedUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<SplitCreateWithoutExpenseInput, SplitUncheckedCreateWithoutExpenseInput> | SplitCreateWithoutExpenseInput[] | SplitUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: SplitCreateOrConnectWithoutExpenseInput | SplitCreateOrConnectWithoutExpenseInput[]
    upsert?: SplitUpsertWithWhereUniqueWithoutExpenseInput | SplitUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: SplitCreateManyExpenseInputEnvelope
    set?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    disconnect?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    delete?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    connect?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    update?: SplitUpdateWithWhereUniqueWithoutExpenseInput | SplitUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: SplitUpdateManyWithWhereWithoutExpenseInput | SplitUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: SplitScalarWhereInput | SplitScalarWhereInput[]
  }

  export type ExpenseCreateNestedOneWithoutSplitsInput = {
    create?: XOR<ExpenseCreateWithoutSplitsInput, ExpenseUncheckedCreateWithoutSplitsInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutSplitsInput
    connect?: ExpenseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSplitsInput = {
    create?: XOR<UserCreateWithoutSplitsInput, UserUncheckedCreateWithoutSplitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSplitsInput
    connect?: UserWhereUniqueInput
  }

  export type ExpenseUpdateOneRequiredWithoutSplitsNestedInput = {
    create?: XOR<ExpenseCreateWithoutSplitsInput, ExpenseUncheckedCreateWithoutSplitsInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutSplitsInput
    upsert?: ExpenseUpsertWithoutSplitsInput
    connect?: ExpenseWhereUniqueInput
    update?: XOR<XOR<ExpenseUpdateToOneWithWhereWithoutSplitsInput, ExpenseUpdateWithoutSplitsInput>, ExpenseUncheckedUpdateWithoutSplitsInput>
  }

  export type UserUpdateOneRequiredWithoutSplitsNestedInput = {
    create?: XOR<UserCreateWithoutSplitsInput, UserUncheckedCreateWithoutSplitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSplitsInput
    upsert?: UserUpsertWithoutSplitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSplitsInput, UserUpdateWithoutSplitsInput>, UserUncheckedUpdateWithoutSplitsInput>
  }

  export type GroupCreateNestedOneWithoutSettlementsInput = {
    create?: XOR<GroupCreateWithoutSettlementsInput, GroupUncheckedCreateWithoutSettlementsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutSettlementsInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSettlementsFromInput = {
    create?: XOR<UserCreateWithoutSettlementsFromInput, UserUncheckedCreateWithoutSettlementsFromInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettlementsFromInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSettlementsToInput = {
    create?: XOR<UserCreateWithoutSettlementsToInput, UserUncheckedCreateWithoutSettlementsToInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettlementsToInput
    connect?: UserWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutSettlementsNestedInput = {
    create?: XOR<GroupCreateWithoutSettlementsInput, GroupUncheckedCreateWithoutSettlementsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutSettlementsInput
    upsert?: GroupUpsertWithoutSettlementsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutSettlementsInput, GroupUpdateWithoutSettlementsInput>, GroupUncheckedUpdateWithoutSettlementsInput>
  }

  export type UserUpdateOneRequiredWithoutSettlementsFromNestedInput = {
    create?: XOR<UserCreateWithoutSettlementsFromInput, UserUncheckedCreateWithoutSettlementsFromInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettlementsFromInput
    upsert?: UserUpsertWithoutSettlementsFromInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettlementsFromInput, UserUpdateWithoutSettlementsFromInput>, UserUncheckedUpdateWithoutSettlementsFromInput>
  }

  export type UserUpdateOneRequiredWithoutSettlementsToNestedInput = {
    create?: XOR<UserCreateWithoutSettlementsToInput, UserUncheckedCreateWithoutSettlementsToInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettlementsToInput
    upsert?: UserUpsertWithoutSettlementsToInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettlementsToInput, UserUpdateWithoutSettlementsToInput>, UserUncheckedUpdateWithoutSettlementsToInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type GroupMemberCreateWithoutUserInput = {
    id?: string
    role: string
    group: GroupCreateNestedOneWithoutMembersInput
  }

  export type GroupMemberUncheckedCreateWithoutUserInput = {
    id?: string
    groupId: string
    role: string
  }

  export type GroupMemberCreateOrConnectWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberCreateManyUserInputEnvelope = {
    data: GroupMemberCreateManyUserInput | GroupMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutPaidByInput = {
    id?: string
    description: string
    amount: number
    createdAt?: Date | string
    group: GroupCreateNestedOneWithoutExpensesInput
    splits?: SplitCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutPaidByInput = {
    id?: string
    description: string
    amount: number
    groupId: string
    createdAt?: Date | string
    splits?: SplitUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutPaidByInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutPaidByInput, ExpenseUncheckedCreateWithoutPaidByInput>
  }

  export type ExpenseCreateManyPaidByInputEnvelope = {
    data: ExpenseCreateManyPaidByInput | ExpenseCreateManyPaidByInput[]
    skipDuplicates?: boolean
  }

  export type SplitCreateWithoutUserInput = {
    id?: string
    share: number
    expense: ExpenseCreateNestedOneWithoutSplitsInput
  }

  export type SplitUncheckedCreateWithoutUserInput = {
    id?: string
    expenseId: string
    share: number
  }

  export type SplitCreateOrConnectWithoutUserInput = {
    where: SplitWhereUniqueInput
    create: XOR<SplitCreateWithoutUserInput, SplitUncheckedCreateWithoutUserInput>
  }

  export type SplitCreateManyUserInputEnvelope = {
    data: SplitCreateManyUserInput | SplitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SettlementCreateWithoutFromInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    group: GroupCreateNestedOneWithoutSettlementsInput
    to: UserCreateNestedOneWithoutSettlementsToInput
  }

  export type SettlementUncheckedCreateWithoutFromInput = {
    id?: string
    toId: string
    amount: number
    groupId: string
    createdAt?: Date | string
  }

  export type SettlementCreateOrConnectWithoutFromInput = {
    where: SettlementWhereUniqueInput
    create: XOR<SettlementCreateWithoutFromInput, SettlementUncheckedCreateWithoutFromInput>
  }

  export type SettlementCreateManyFromInputEnvelope = {
    data: SettlementCreateManyFromInput | SettlementCreateManyFromInput[]
    skipDuplicates?: boolean
  }

  export type SettlementCreateWithoutToInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    group: GroupCreateNestedOneWithoutSettlementsInput
    from: UserCreateNestedOneWithoutSettlementsFromInput
  }

  export type SettlementUncheckedCreateWithoutToInput = {
    id?: string
    fromId: string
    amount: number
    groupId: string
    createdAt?: Date | string
  }

  export type SettlementCreateOrConnectWithoutToInput = {
    where: SettlementWhereUniqueInput
    create: XOR<SettlementCreateWithoutToInput, SettlementUncheckedCreateWithoutToInput>
  }

  export type SettlementCreateManyToInputEnvelope = {
    data: SettlementCreateManyToInput | SettlementCreateManyToInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutUserInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupMemberScalarWhereInput = {
    AND?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    OR?: GroupMemberScalarWhereInput[]
    NOT?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    id?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    groupId?: StringFilter<"GroupMember"> | string
    role?: StringFilter<"GroupMember"> | string
  }

  export type ExpenseUpsertWithWhereUniqueWithoutPaidByInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutPaidByInput, ExpenseUncheckedUpdateWithoutPaidByInput>
    create: XOR<ExpenseCreateWithoutPaidByInput, ExpenseUncheckedCreateWithoutPaidByInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutPaidByInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutPaidByInput, ExpenseUncheckedUpdateWithoutPaidByInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutPaidByInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutPaidByInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: StringFilter<"Expense"> | string
    description?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    paidById?: StringFilter<"Expense"> | string
    groupId?: StringFilter<"Expense"> | string
    createdAt?: DateTimeFilter<"Expense"> | Date | string
  }

  export type SplitUpsertWithWhereUniqueWithoutUserInput = {
    where: SplitWhereUniqueInput
    update: XOR<SplitUpdateWithoutUserInput, SplitUncheckedUpdateWithoutUserInput>
    create: XOR<SplitCreateWithoutUserInput, SplitUncheckedCreateWithoutUserInput>
  }

  export type SplitUpdateWithWhereUniqueWithoutUserInput = {
    where: SplitWhereUniqueInput
    data: XOR<SplitUpdateWithoutUserInput, SplitUncheckedUpdateWithoutUserInput>
  }

  export type SplitUpdateManyWithWhereWithoutUserInput = {
    where: SplitScalarWhereInput
    data: XOR<SplitUpdateManyMutationInput, SplitUncheckedUpdateManyWithoutUserInput>
  }

  export type SplitScalarWhereInput = {
    AND?: SplitScalarWhereInput | SplitScalarWhereInput[]
    OR?: SplitScalarWhereInput[]
    NOT?: SplitScalarWhereInput | SplitScalarWhereInput[]
    id?: StringFilter<"Split"> | string
    expenseId?: StringFilter<"Split"> | string
    userId?: StringFilter<"Split"> | string
    share?: FloatFilter<"Split"> | number
  }

  export type SettlementUpsertWithWhereUniqueWithoutFromInput = {
    where: SettlementWhereUniqueInput
    update: XOR<SettlementUpdateWithoutFromInput, SettlementUncheckedUpdateWithoutFromInput>
    create: XOR<SettlementCreateWithoutFromInput, SettlementUncheckedCreateWithoutFromInput>
  }

  export type SettlementUpdateWithWhereUniqueWithoutFromInput = {
    where: SettlementWhereUniqueInput
    data: XOR<SettlementUpdateWithoutFromInput, SettlementUncheckedUpdateWithoutFromInput>
  }

  export type SettlementUpdateManyWithWhereWithoutFromInput = {
    where: SettlementScalarWhereInput
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyWithoutFromInput>
  }

  export type SettlementScalarWhereInput = {
    AND?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
    OR?: SettlementScalarWhereInput[]
    NOT?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
    id?: StringFilter<"Settlement"> | string
    fromId?: StringFilter<"Settlement"> | string
    toId?: StringFilter<"Settlement"> | string
    amount?: FloatFilter<"Settlement"> | number
    groupId?: StringFilter<"Settlement"> | string
    createdAt?: DateTimeFilter<"Settlement"> | Date | string
  }

  export type SettlementUpsertWithWhereUniqueWithoutToInput = {
    where: SettlementWhereUniqueInput
    update: XOR<SettlementUpdateWithoutToInput, SettlementUncheckedUpdateWithoutToInput>
    create: XOR<SettlementCreateWithoutToInput, SettlementUncheckedCreateWithoutToInput>
  }

  export type SettlementUpdateWithWhereUniqueWithoutToInput = {
    where: SettlementWhereUniqueInput
    data: XOR<SettlementUpdateWithoutToInput, SettlementUncheckedUpdateWithoutToInput>
  }

  export type SettlementUpdateManyWithWhereWithoutToInput = {
    where: SettlementScalarWhereInput
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyWithoutToInput>
  }

  export type GroupMemberCreateWithoutGroupInput = {
    id?: string
    role: string
    user: UserCreateNestedOneWithoutGroupsInput
  }

  export type GroupMemberUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
    role: string
  }

  export type GroupMemberCreateOrConnectWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberCreateManyGroupInputEnvelope = {
    data: GroupMemberCreateManyGroupInput | GroupMemberCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutGroupInput = {
    id?: string
    description: string
    amount: number
    createdAt?: Date | string
    paidBy: UserCreateNestedOneWithoutExpensesInput
    splits?: SplitCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutGroupInput = {
    id?: string
    description: string
    amount: number
    paidById: string
    createdAt?: Date | string
    splits?: SplitUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutGroupInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput>
  }

  export type ExpenseCreateManyGroupInputEnvelope = {
    data: ExpenseCreateManyGroupInput | ExpenseCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type SettlementCreateWithoutGroupInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    from: UserCreateNestedOneWithoutSettlementsFromInput
    to: UserCreateNestedOneWithoutSettlementsToInput
  }

  export type SettlementUncheckedCreateWithoutGroupInput = {
    id?: string
    fromId: string
    toId: string
    amount: number
    createdAt?: Date | string
  }

  export type SettlementCreateOrConnectWithoutGroupInput = {
    where: SettlementWhereUniqueInput
    create: XOR<SettlementCreateWithoutGroupInput, SettlementUncheckedCreateWithoutGroupInput>
  }

  export type SettlementCreateManyGroupInputEnvelope = {
    data: SettlementCreateManyGroupInput | SettlementCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutGroupInput>
  }

  export type ExpenseUpsertWithWhereUniqueWithoutGroupInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutGroupInput, ExpenseUncheckedUpdateWithoutGroupInput>
    create: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutGroupInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutGroupInput, ExpenseUncheckedUpdateWithoutGroupInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutGroupInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutGroupInput>
  }

  export type SettlementUpsertWithWhereUniqueWithoutGroupInput = {
    where: SettlementWhereUniqueInput
    update: XOR<SettlementUpdateWithoutGroupInput, SettlementUncheckedUpdateWithoutGroupInput>
    create: XOR<SettlementCreateWithoutGroupInput, SettlementUncheckedCreateWithoutGroupInput>
  }

  export type SettlementUpdateWithWhereUniqueWithoutGroupInput = {
    where: SettlementWhereUniqueInput
    data: XOR<SettlementUpdateWithoutGroupInput, SettlementUncheckedUpdateWithoutGroupInput>
  }

  export type SettlementUpdateManyWithWhereWithoutGroupInput = {
    where: SettlementScalarWhereInput
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserCreateWithoutGroupsInput = {
    id?: string
    name: string
    email: string
    password: string
    expenses?: ExpenseCreateNestedManyWithoutPaidByInput
    splits?: SplitCreateNestedManyWithoutUserInput
    settlementsFrom?: SettlementCreateNestedManyWithoutFromInput
    settlementsTo?: SettlementCreateNestedManyWithoutToInput
  }

  export type UserUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    email: string
    password: string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutPaidByInput
    splits?: SplitUncheckedCreateNestedManyWithoutUserInput
    settlementsFrom?: SettlementUncheckedCreateNestedManyWithoutFromInput
    settlementsTo?: SettlementUncheckedCreateNestedManyWithoutToInput
  }

  export type UserCreateOrConnectWithoutGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
  }

  export type GroupCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    expenses?: ExpenseCreateNestedManyWithoutGroupInput
    settlements?: SettlementCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutGroupsInput = {
    update: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type UserUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    expenses?: ExpenseUpdateManyWithoutPaidByNestedInput
    splits?: SplitUpdateManyWithoutUserNestedInput
    settlementsFrom?: SettlementUpdateManyWithoutFromNestedInput
    settlementsTo?: SettlementUpdateManyWithoutToNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    expenses?: ExpenseUncheckedUpdateManyWithoutPaidByNestedInput
    splits?: SplitUncheckedUpdateManyWithoutUserNestedInput
    settlementsFrom?: SettlementUncheckedUpdateManyWithoutFromNestedInput
    settlementsTo?: SettlementUncheckedUpdateManyWithoutToNestedInput
  }

  export type GroupUpsertWithoutMembersInput = {
    update: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type GroupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserCreateWithoutExpensesInput = {
    id?: string
    name: string
    email: string
    password: string
    groups?: GroupMemberCreateNestedManyWithoutUserInput
    splits?: SplitCreateNestedManyWithoutUserInput
    settlementsFrom?: SettlementCreateNestedManyWithoutFromInput
    settlementsTo?: SettlementCreateNestedManyWithoutToInput
  }

  export type UserUncheckedCreateWithoutExpensesInput = {
    id?: string
    name: string
    email: string
    password: string
    groups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    splits?: SplitUncheckedCreateNestedManyWithoutUserInput
    settlementsFrom?: SettlementUncheckedCreateNestedManyWithoutFromInput
    settlementsTo?: SettlementUncheckedCreateNestedManyWithoutToInput
  }

  export type UserCreateOrConnectWithoutExpensesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
  }

  export type GroupCreateWithoutExpensesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    settlements?: SettlementCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutExpensesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutExpensesInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutExpensesInput, GroupUncheckedCreateWithoutExpensesInput>
  }

  export type SplitCreateWithoutExpenseInput = {
    id?: string
    share: number
    user: UserCreateNestedOneWithoutSplitsInput
  }

  export type SplitUncheckedCreateWithoutExpenseInput = {
    id?: string
    userId: string
    share: number
  }

  export type SplitCreateOrConnectWithoutExpenseInput = {
    where: SplitWhereUniqueInput
    create: XOR<SplitCreateWithoutExpenseInput, SplitUncheckedCreateWithoutExpenseInput>
  }

  export type SplitCreateManyExpenseInputEnvelope = {
    data: SplitCreateManyExpenseInput | SplitCreateManyExpenseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutExpensesInput = {
    update: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpensesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type UserUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    groups?: GroupMemberUpdateManyWithoutUserNestedInput
    splits?: SplitUpdateManyWithoutUserNestedInput
    settlementsFrom?: SettlementUpdateManyWithoutFromNestedInput
    settlementsTo?: SettlementUpdateManyWithoutToNestedInput
  }

  export type UserUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    groups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    splits?: SplitUncheckedUpdateManyWithoutUserNestedInput
    settlementsFrom?: SettlementUncheckedUpdateManyWithoutFromNestedInput
    settlementsTo?: SettlementUncheckedUpdateManyWithoutToNestedInput
  }

  export type GroupUpsertWithoutExpensesInput = {
    update: XOR<GroupUpdateWithoutExpensesInput, GroupUncheckedUpdateWithoutExpensesInput>
    create: XOR<GroupCreateWithoutExpensesInput, GroupUncheckedCreateWithoutExpensesInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutExpensesInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutExpensesInput, GroupUncheckedUpdateWithoutExpensesInput>
  }

  export type GroupUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type SplitUpsertWithWhereUniqueWithoutExpenseInput = {
    where: SplitWhereUniqueInput
    update: XOR<SplitUpdateWithoutExpenseInput, SplitUncheckedUpdateWithoutExpenseInput>
    create: XOR<SplitCreateWithoutExpenseInput, SplitUncheckedCreateWithoutExpenseInput>
  }

  export type SplitUpdateWithWhereUniqueWithoutExpenseInput = {
    where: SplitWhereUniqueInput
    data: XOR<SplitUpdateWithoutExpenseInput, SplitUncheckedUpdateWithoutExpenseInput>
  }

  export type SplitUpdateManyWithWhereWithoutExpenseInput = {
    where: SplitScalarWhereInput
    data: XOR<SplitUpdateManyMutationInput, SplitUncheckedUpdateManyWithoutExpenseInput>
  }

  export type ExpenseCreateWithoutSplitsInput = {
    id?: string
    description: string
    amount: number
    createdAt?: Date | string
    paidBy: UserCreateNestedOneWithoutExpensesInput
    group: GroupCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutSplitsInput = {
    id?: string
    description: string
    amount: number
    paidById: string
    groupId: string
    createdAt?: Date | string
  }

  export type ExpenseCreateOrConnectWithoutSplitsInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutSplitsInput, ExpenseUncheckedCreateWithoutSplitsInput>
  }

  export type UserCreateWithoutSplitsInput = {
    id?: string
    name: string
    email: string
    password: string
    groups?: GroupMemberCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutPaidByInput
    settlementsFrom?: SettlementCreateNestedManyWithoutFromInput
    settlementsTo?: SettlementCreateNestedManyWithoutToInput
  }

  export type UserUncheckedCreateWithoutSplitsInput = {
    id?: string
    name: string
    email: string
    password: string
    groups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutPaidByInput
    settlementsFrom?: SettlementUncheckedCreateNestedManyWithoutFromInput
    settlementsTo?: SettlementUncheckedCreateNestedManyWithoutToInput
  }

  export type UserCreateOrConnectWithoutSplitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSplitsInput, UserUncheckedCreateWithoutSplitsInput>
  }

  export type ExpenseUpsertWithoutSplitsInput = {
    update: XOR<ExpenseUpdateWithoutSplitsInput, ExpenseUncheckedUpdateWithoutSplitsInput>
    create: XOR<ExpenseCreateWithoutSplitsInput, ExpenseUncheckedCreateWithoutSplitsInput>
    where?: ExpenseWhereInput
  }

  export type ExpenseUpdateToOneWithWhereWithoutSplitsInput = {
    where?: ExpenseWhereInput
    data: XOR<ExpenseUpdateWithoutSplitsInput, ExpenseUncheckedUpdateWithoutSplitsInput>
  }

  export type ExpenseUpdateWithoutSplitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidBy?: UserUpdateOneRequiredWithoutExpensesNestedInput
    group?: GroupUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutSplitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidById?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSplitsInput = {
    update: XOR<UserUpdateWithoutSplitsInput, UserUncheckedUpdateWithoutSplitsInput>
    create: XOR<UserCreateWithoutSplitsInput, UserUncheckedCreateWithoutSplitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSplitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSplitsInput, UserUncheckedUpdateWithoutSplitsInput>
  }

  export type UserUpdateWithoutSplitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    groups?: GroupMemberUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutPaidByNestedInput
    settlementsFrom?: SettlementUpdateManyWithoutFromNestedInput
    settlementsTo?: SettlementUpdateManyWithoutToNestedInput
  }

  export type UserUncheckedUpdateWithoutSplitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    groups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutPaidByNestedInput
    settlementsFrom?: SettlementUncheckedUpdateManyWithoutFromNestedInput
    settlementsTo?: SettlementUncheckedUpdateManyWithoutToNestedInput
  }

  export type GroupCreateWithoutSettlementsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    expenses?: ExpenseCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutSettlementsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutSettlementsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutSettlementsInput, GroupUncheckedCreateWithoutSettlementsInput>
  }

  export type UserCreateWithoutSettlementsFromInput = {
    id?: string
    name: string
    email: string
    password: string
    groups?: GroupMemberCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutPaidByInput
    splits?: SplitCreateNestedManyWithoutUserInput
    settlementsTo?: SettlementCreateNestedManyWithoutToInput
  }

  export type UserUncheckedCreateWithoutSettlementsFromInput = {
    id?: string
    name: string
    email: string
    password: string
    groups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutPaidByInput
    splits?: SplitUncheckedCreateNestedManyWithoutUserInput
    settlementsTo?: SettlementUncheckedCreateNestedManyWithoutToInput
  }

  export type UserCreateOrConnectWithoutSettlementsFromInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettlementsFromInput, UserUncheckedCreateWithoutSettlementsFromInput>
  }

  export type UserCreateWithoutSettlementsToInput = {
    id?: string
    name: string
    email: string
    password: string
    groups?: GroupMemberCreateNestedManyWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutPaidByInput
    splits?: SplitCreateNestedManyWithoutUserInput
    settlementsFrom?: SettlementCreateNestedManyWithoutFromInput
  }

  export type UserUncheckedCreateWithoutSettlementsToInput = {
    id?: string
    name: string
    email: string
    password: string
    groups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutPaidByInput
    splits?: SplitUncheckedCreateNestedManyWithoutUserInput
    settlementsFrom?: SettlementUncheckedCreateNestedManyWithoutFromInput
  }

  export type UserCreateOrConnectWithoutSettlementsToInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettlementsToInput, UserUncheckedCreateWithoutSettlementsToInput>
  }

  export type GroupUpsertWithoutSettlementsInput = {
    update: XOR<GroupUpdateWithoutSettlementsInput, GroupUncheckedUpdateWithoutSettlementsInput>
    create: XOR<GroupCreateWithoutSettlementsInput, GroupUncheckedCreateWithoutSettlementsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutSettlementsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutSettlementsInput, GroupUncheckedUpdateWithoutSettlementsInput>
  }

  export type GroupUpdateWithoutSettlementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    expenses?: ExpenseUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutSettlementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutSettlementsFromInput = {
    update: XOR<UserUpdateWithoutSettlementsFromInput, UserUncheckedUpdateWithoutSettlementsFromInput>
    create: XOR<UserCreateWithoutSettlementsFromInput, UserUncheckedCreateWithoutSettlementsFromInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettlementsFromInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettlementsFromInput, UserUncheckedUpdateWithoutSettlementsFromInput>
  }

  export type UserUpdateWithoutSettlementsFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    groups?: GroupMemberUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutPaidByNestedInput
    splits?: SplitUpdateManyWithoutUserNestedInput
    settlementsTo?: SettlementUpdateManyWithoutToNestedInput
  }

  export type UserUncheckedUpdateWithoutSettlementsFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    groups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutPaidByNestedInput
    splits?: SplitUncheckedUpdateManyWithoutUserNestedInput
    settlementsTo?: SettlementUncheckedUpdateManyWithoutToNestedInput
  }

  export type UserUpsertWithoutSettlementsToInput = {
    update: XOR<UserUpdateWithoutSettlementsToInput, UserUncheckedUpdateWithoutSettlementsToInput>
    create: XOR<UserCreateWithoutSettlementsToInput, UserUncheckedCreateWithoutSettlementsToInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettlementsToInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettlementsToInput, UserUncheckedUpdateWithoutSettlementsToInput>
  }

  export type UserUpdateWithoutSettlementsToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    groups?: GroupMemberUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutPaidByNestedInput
    splits?: SplitUpdateManyWithoutUserNestedInput
    settlementsFrom?: SettlementUpdateManyWithoutFromNestedInput
  }

  export type UserUncheckedUpdateWithoutSettlementsToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    groups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutPaidByNestedInput
    splits?: SplitUncheckedUpdateManyWithoutUserNestedInput
    settlementsFrom?: SettlementUncheckedUpdateManyWithoutFromNestedInput
  }

  export type GroupMemberCreateManyUserInput = {
    id?: string
    groupId: string
    role: string
  }

  export type ExpenseCreateManyPaidByInput = {
    id?: string
    description: string
    amount: number
    groupId: string
    createdAt?: Date | string
  }

  export type SplitCreateManyUserInput = {
    id?: string
    expenseId: string
    share: number
  }

  export type SettlementCreateManyFromInput = {
    id?: string
    toId: string
    amount: number
    groupId: string
    createdAt?: Date | string
  }

  export type SettlementCreateManyToInput = {
    id?: string
    fromId: string
    amount: number
    groupId: string
    createdAt?: Date | string
  }

  export type GroupMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseUpdateWithoutPaidByInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutExpensesNestedInput
    splits?: SplitUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutPaidByInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    splits?: SplitUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutPaidByInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SplitUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    share?: FloatFieldUpdateOperationsInput | number
    expense?: ExpenseUpdateOneRequiredWithoutSplitsNestedInput
  }

  export type SplitUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    share?: FloatFieldUpdateOperationsInput | number
  }

  export type SplitUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    share?: FloatFieldUpdateOperationsInput | number
  }

  export type SettlementUpdateWithoutFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutSettlementsNestedInput
    to?: UserUpdateOneRequiredWithoutSettlementsToNestedInput
  }

  export type SettlementUncheckedUpdateWithoutFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementUncheckedUpdateManyWithoutFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementUpdateWithoutToInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutSettlementsNestedInput
    from?: UserUpdateOneRequiredWithoutSettlementsFromNestedInput
  }

  export type SettlementUncheckedUpdateWithoutToInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementUncheckedUpdateManyWithoutToInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateManyGroupInput = {
    id?: string
    userId: string
    role: string
  }

  export type ExpenseCreateManyGroupInput = {
    id?: string
    description: string
    amount: number
    paidById: string
    createdAt?: Date | string
  }

  export type SettlementCreateManyGroupInput = {
    id?: string
    fromId: string
    toId: string
    amount: number
    createdAt?: Date | string
  }

  export type GroupMemberUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidBy?: UserUpdateOneRequiredWithoutExpensesNestedInput
    splits?: SplitUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    splits?: SplitUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    from?: UserUpdateOneRequiredWithoutSettlementsFromNestedInput
    to?: UserUpdateOneRequiredWithoutSettlementsToNestedInput
  }

  export type SettlementUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SplitCreateManyExpenseInput = {
    id?: string
    userId: string
    share: number
  }

  export type SplitUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    share?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutSplitsNestedInput
  }

  export type SplitUncheckedUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    share?: FloatFieldUpdateOperationsInput | number
  }

  export type SplitUncheckedUpdateManyWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    share?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}