
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
 * Model challenge
 * 
 */
export type challenge = $Result.DefaultSelection<Prisma.$challengePayload>
/**
 * Model challengeCategory
 * 
 */
export type challengeCategory = $Result.DefaultSelection<Prisma.$challengeCategoryPayload>
/**
 * Model skill
 * 
 */
export type skill = $Result.DefaultSelection<Prisma.$skillPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Challenges
 * const challenges = await prisma.challenge.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Challenges
   * const challenges = await prisma.challenge.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.challenge`: Exposes CRUD operations for the **challenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenge.findMany()
    * ```
    */
  get challenge(): Prisma.challengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challengeCategory`: Exposes CRUD operations for the **challengeCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChallengeCategories
    * const challengeCategories = await prisma.challengeCategory.findMany()
    * ```
    */
  get challengeCategory(): Prisma.challengeCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.skillDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.3.0
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    challenge: 'challenge',
    challengeCategory: 'challengeCategory',
    skill: 'skill'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "challenge" | "challengeCategory" | "skill"
      txIsolationLevel: never
    }
    model: {
      challenge: {
        payload: Prisma.$challengePayload<ExtArgs>
        fields: Prisma.challengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.challengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.challengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload>
          }
          findFirst: {
            args: Prisma.challengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.challengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload>
          }
          findMany: {
            args: Prisma.challengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload>[]
          }
          create: {
            args: Prisma.challengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload>
          }
          createMany: {
            args: Prisma.challengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.challengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload>
          }
          update: {
            args: Prisma.challengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload>
          }
          deleteMany: {
            args: Prisma.challengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.challengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.challengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengePayload>
          }
          aggregate: {
            args: Prisma.ChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenge>
          }
          groupBy: {
            args: Prisma.challengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.challengeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.challengeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.challengeCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCountAggregateOutputType> | number
          }
        }
      }
      challengeCategory: {
        payload: Prisma.$challengeCategoryPayload<ExtArgs>
        fields: Prisma.challengeCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.challengeCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengeCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.challengeCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengeCategoryPayload>
          }
          findFirst: {
            args: Prisma.challengeCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengeCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.challengeCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengeCategoryPayload>
          }
          findMany: {
            args: Prisma.challengeCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengeCategoryPayload>[]
          }
          create: {
            args: Prisma.challengeCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengeCategoryPayload>
          }
          createMany: {
            args: Prisma.challengeCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.challengeCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengeCategoryPayload>
          }
          update: {
            args: Prisma.challengeCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengeCategoryPayload>
          }
          deleteMany: {
            args: Prisma.challengeCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.challengeCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.challengeCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengeCategoryPayload>
          }
          aggregate: {
            args: Prisma.ChallengeCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallengeCategory>
          }
          groupBy: {
            args: Prisma.challengeCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.challengeCategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.challengeCategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.challengeCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCategoryCountAggregateOutputType> | number
          }
        }
      }
      skill: {
        payload: Prisma.$skillPayload<ExtArgs>
        fields: Prisma.skillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          findFirst: {
            args: Prisma.skillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          findMany: {
            args: Prisma.skillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>[]
          }
          create: {
            args: Prisma.skillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          createMany: {
            args: Prisma.skillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.skillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          update: {
            args: Prisma.skillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          deleteMany: {
            args: Prisma.skillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.skillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.skillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.skillFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.skillAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.skillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    challenge?: challengeOmit
    challengeCategory?: challengeCategoryOmit
    skill?: skillOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ChallengeCategoryCountOutputType
   */

  export type ChallengeCategoryCountOutputType = {
    challenges: number
  }

  export type ChallengeCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges?: boolean | ChallengeCategoryCountOutputTypeCountChallengesArgs
  }

  // Custom InputTypes
  /**
   * ChallengeCategoryCountOutputType without action
   */
  export type ChallengeCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCategoryCountOutputType
     */
    select?: ChallengeCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChallengeCategoryCountOutputType without action
   */
  export type ChallengeCategoryCountOutputTypeCountChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challengeWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    challenges: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges?: boolean | SkillCountOutputTypeCountChallengesArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challengeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model challenge
   */

  export type AggregateChallenge = {
    _count: ChallengeCountAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  export type ChallengeMinAggregateOutputType = {
    id: string | null
    challengeTitle: string | null
    description: string | null
    projectBrief: string | null
    startDate: Date | null
    deadline: Date | null
    moneyPrize: string | null
    categoryId: string | null
    submissionLink: string | null
    contactEmail: string | null
    createdAt: Date | null
  }

  export type ChallengeMaxAggregateOutputType = {
    id: string | null
    challengeTitle: string | null
    description: string | null
    projectBrief: string | null
    startDate: Date | null
    deadline: Date | null
    moneyPrize: string | null
    categoryId: string | null
    submissionLink: string | null
    contactEmail: string | null
    createdAt: Date | null
  }

  export type ChallengeCountAggregateOutputType = {
    id: number
    challengeTitle: number
    description: number
    projectBrief: number
    startDate: number
    deadline: number
    moneyPrize: number
    seniority: number
    categoryId: number
    skillId: number
    submissionLink: number
    contactEmail: number
    createdAt: number
    _all: number
  }


  export type ChallengeMinAggregateInputType = {
    id?: true
    challengeTitle?: true
    description?: true
    projectBrief?: true
    startDate?: true
    deadline?: true
    moneyPrize?: true
    categoryId?: true
    submissionLink?: true
    contactEmail?: true
    createdAt?: true
  }

  export type ChallengeMaxAggregateInputType = {
    id?: true
    challengeTitle?: true
    description?: true
    projectBrief?: true
    startDate?: true
    deadline?: true
    moneyPrize?: true
    categoryId?: true
    submissionLink?: true
    contactEmail?: true
    createdAt?: true
  }

  export type ChallengeCountAggregateInputType = {
    id?: true
    challengeTitle?: true
    description?: true
    projectBrief?: true
    startDate?: true
    deadline?: true
    moneyPrize?: true
    seniority?: true
    categoryId?: true
    skillId?: true
    submissionLink?: true
    contactEmail?: true
    createdAt?: true
    _all?: true
  }

  export type ChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which challenge to aggregate.
     */
    where?: challengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenges to fetch.
     */
    orderBy?: challengeOrderByWithRelationInput | challengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: challengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned challenges
    **/
    _count?: true | ChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeMaxAggregateInputType
  }

  export type GetChallengeAggregateType<T extends ChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge[P]>
      : GetScalarType<T[P], AggregateChallenge[P]>
  }




  export type challengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challengeWhereInput
    orderBy?: challengeOrderByWithAggregationInput | challengeOrderByWithAggregationInput[]
    by: ChallengeScalarFieldEnum[] | ChallengeScalarFieldEnum
    having?: challengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeCountAggregateInputType | true
    _min?: ChallengeMinAggregateInputType
    _max?: ChallengeMaxAggregateInputType
  }

  export type ChallengeGroupByOutputType = {
    id: string
    challengeTitle: string
    description: string
    projectBrief: string
    startDate: Date
    deadline: Date
    moneyPrize: string
    seniority: string[]
    categoryId: string
    skillId: string[]
    submissionLink: string
    contactEmail: string
    createdAt: Date
    _count: ChallengeCountAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  type GetChallengeGroupByPayload<T extends challengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
        }
      >
    >


  export type challengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeTitle?: boolean
    description?: boolean
    projectBrief?: boolean
    startDate?: boolean
    deadline?: boolean
    moneyPrize?: boolean
    seniority?: boolean
    categoryId?: boolean
    skillId?: boolean
    submissionLink?: boolean
    contactEmail?: boolean
    createdAt?: boolean
    category?: boolean | challengeCategoryDefaultArgs<ExtArgs>
    skills?: boolean | skillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>



  export type challengeSelectScalar = {
    id?: boolean
    challengeTitle?: boolean
    description?: boolean
    projectBrief?: boolean
    startDate?: boolean
    deadline?: boolean
    moneyPrize?: boolean
    seniority?: boolean
    categoryId?: boolean
    skillId?: boolean
    submissionLink?: boolean
    contactEmail?: boolean
    createdAt?: boolean
  }

  export type challengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "challengeTitle" | "description" | "projectBrief" | "startDate" | "deadline" | "moneyPrize" | "seniority" | "categoryId" | "skillId" | "submissionLink" | "contactEmail" | "createdAt", ExtArgs["result"]["challenge"]>
  export type challengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | challengeCategoryDefaultArgs<ExtArgs>
    skills?: boolean | skillDefaultArgs<ExtArgs>
  }

  export type $challengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "challenge"
    objects: {
      category: Prisma.$challengeCategoryPayload<ExtArgs>
      skills: Prisma.$skillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      challengeTitle: string
      description: string
      projectBrief: string
      startDate: Date
      deadline: Date
      moneyPrize: string
      seniority: string[]
      categoryId: string
      skillId: string[]
      submissionLink: string
      contactEmail: string
      createdAt: Date
    }, ExtArgs["result"]["challenge"]>
    composites: {}
  }

  type challengeGetPayload<S extends boolean | null | undefined | challengeDefaultArgs> = $Result.GetResult<Prisma.$challengePayload, S>

  type challengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<challengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeCountAggregateInputType | true
    }

  export interface challengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['challenge'], meta: { name: 'challenge' } }
    /**
     * Find zero or one Challenge that matches the filter.
     * @param {challengeFindUniqueArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends challengeFindUniqueArgs>(args: SelectSubset<T, challengeFindUniqueArgs<ExtArgs>>): Prisma__challengeClient<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Challenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {challengeFindUniqueOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends challengeFindUniqueOrThrowArgs>(args: SelectSubset<T, challengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__challengeClient<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Challenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengeFindFirstArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends challengeFindFirstArgs>(args?: SelectSubset<T, challengeFindFirstArgs<ExtArgs>>): Prisma__challengeClient<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Challenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengeFindFirstOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends challengeFindFirstOrThrowArgs>(args?: SelectSubset<T, challengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__challengeClient<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenge.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeWithIdOnly = await prisma.challenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends challengeFindManyArgs>(args?: SelectSubset<T, challengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Challenge.
     * @param {challengeCreateArgs} args - Arguments to create a Challenge.
     * @example
     * // Create one Challenge
     * const Challenge = await prisma.challenge.create({
     *   data: {
     *     // ... data to create a Challenge
     *   }
     * })
     * 
     */
    create<T extends challengeCreateArgs>(args: SelectSubset<T, challengeCreateArgs<ExtArgs>>): Prisma__challengeClient<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Challenges.
     * @param {challengeCreateManyArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends challengeCreateManyArgs>(args?: SelectSubset<T, challengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Challenge.
     * @param {challengeDeleteArgs} args - Arguments to delete one Challenge.
     * @example
     * // Delete one Challenge
     * const Challenge = await prisma.challenge.delete({
     *   where: {
     *     // ... filter to delete one Challenge
     *   }
     * })
     * 
     */
    delete<T extends challengeDeleteArgs>(args: SelectSubset<T, challengeDeleteArgs<ExtArgs>>): Prisma__challengeClient<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Challenge.
     * @param {challengeUpdateArgs} args - Arguments to update one Challenge.
     * @example
     * // Update one Challenge
     * const challenge = await prisma.challenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends challengeUpdateArgs>(args: SelectSubset<T, challengeUpdateArgs<ExtArgs>>): Prisma__challengeClient<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Challenges.
     * @param {challengeDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends challengeDeleteManyArgs>(args?: SelectSubset<T, challengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends challengeUpdateManyArgs>(args: SelectSubset<T, challengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Challenge.
     * @param {challengeUpsertArgs} args - Arguments to update or create a Challenge.
     * @example
     * // Update or create a Challenge
     * const challenge = await prisma.challenge.upsert({
     *   create: {
     *     // ... data to create a Challenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge we want to update
     *   }
     * })
     */
    upsert<T extends challengeUpsertArgs>(args: SelectSubset<T, challengeUpsertArgs<ExtArgs>>): Prisma__challengeClient<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Challenges that matches the filter.
     * @param {challengeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const challenge = await prisma.challenge.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: challengeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Challenge.
     * @param {challengeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const challenge = await prisma.challenge.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: challengeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengeCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenge.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends challengeCountArgs>(
      args?: Subset<T, challengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallengeAggregateArgs>(args: Subset<T, ChallengeAggregateArgs>): Prisma.PrismaPromise<GetChallengeAggregateType<T>>

    /**
     * Group by Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengeGroupByArgs} args - Group by arguments.
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
      T extends challengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: challengeGroupByArgs['orderBy'] }
        : { orderBy?: challengeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, challengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the challenge model
   */
  readonly fields: challengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for challenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__challengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends challengeCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, challengeCategoryDefaultArgs<ExtArgs>>): Prisma__challengeCategoryClient<$Result.GetResult<Prisma.$challengeCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    skills<T extends skillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, skillDefaultArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the challenge model
   */ 
  interface challengeFieldRefs {
    readonly id: FieldRef<"challenge", 'String'>
    readonly challengeTitle: FieldRef<"challenge", 'String'>
    readonly description: FieldRef<"challenge", 'String'>
    readonly projectBrief: FieldRef<"challenge", 'String'>
    readonly startDate: FieldRef<"challenge", 'DateTime'>
    readonly deadline: FieldRef<"challenge", 'DateTime'>
    readonly moneyPrize: FieldRef<"challenge", 'String'>
    readonly seniority: FieldRef<"challenge", 'String[]'>
    readonly categoryId: FieldRef<"challenge", 'String'>
    readonly skillId: FieldRef<"challenge", 'String[]'>
    readonly submissionLink: FieldRef<"challenge", 'String'>
    readonly contactEmail: FieldRef<"challenge", 'String'>
    readonly createdAt: FieldRef<"challenge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * challenge findUnique
   */
  export type challengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    /**
     * Filter, which challenge to fetch.
     */
    where: challengeWhereUniqueInput
  }

  /**
   * challenge findUniqueOrThrow
   */
  export type challengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    /**
     * Filter, which challenge to fetch.
     */
    where: challengeWhereUniqueInput
  }

  /**
   * challenge findFirst
   */
  export type challengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    /**
     * Filter, which challenge to fetch.
     */
    where?: challengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenges to fetch.
     */
    orderBy?: challengeOrderByWithRelationInput | challengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for challenges.
     */
    cursor?: challengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * challenge findFirstOrThrow
   */
  export type challengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    /**
     * Filter, which challenge to fetch.
     */
    where?: challengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenges to fetch.
     */
    orderBy?: challengeOrderByWithRelationInput | challengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for challenges.
     */
    cursor?: challengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * challenge findMany
   */
  export type challengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    /**
     * Filter, which challenges to fetch.
     */
    where?: challengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenges to fetch.
     */
    orderBy?: challengeOrderByWithRelationInput | challengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing challenges.
     */
    cursor?: challengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenges.
     */
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * challenge create
   */
  export type challengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    /**
     * The data needed to create a challenge.
     */
    data: XOR<challengeCreateInput, challengeUncheckedCreateInput>
  }

  /**
   * challenge createMany
   */
  export type challengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many challenges.
     */
    data: challengeCreateManyInput | challengeCreateManyInput[]
  }

  /**
   * challenge update
   */
  export type challengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    /**
     * The data needed to update a challenge.
     */
    data: XOR<challengeUpdateInput, challengeUncheckedUpdateInput>
    /**
     * Choose, which challenge to update.
     */
    where: challengeWhereUniqueInput
  }

  /**
   * challenge updateMany
   */
  export type challengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update challenges.
     */
    data: XOR<challengeUpdateManyMutationInput, challengeUncheckedUpdateManyInput>
    /**
     * Filter which challenges to update
     */
    where?: challengeWhereInput
    /**
     * Limit how many challenges to update.
     */
    limit?: number
  }

  /**
   * challenge upsert
   */
  export type challengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    /**
     * The filter to search for the challenge to update in case it exists.
     */
    where: challengeWhereUniqueInput
    /**
     * In case the challenge found by the `where` argument doesn't exist, create a new challenge with this data.
     */
    create: XOR<challengeCreateInput, challengeUncheckedCreateInput>
    /**
     * In case the challenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<challengeUpdateInput, challengeUncheckedUpdateInput>
  }

  /**
   * challenge delete
   */
  export type challengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    /**
     * Filter which challenge to delete.
     */
    where: challengeWhereUniqueInput
  }

  /**
   * challenge deleteMany
   */
  export type challengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which challenges to delete
     */
    where?: challengeWhereInput
    /**
     * Limit how many challenges to delete.
     */
    limit?: number
  }

  /**
   * challenge findRaw
   */
  export type challengeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * challenge aggregateRaw
   */
  export type challengeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * challenge without action
   */
  export type challengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
  }


  /**
   * Model challengeCategory
   */

  export type AggregateChallengeCategory = {
    _count: ChallengeCategoryCountAggregateOutputType | null
    _min: ChallengeCategoryMinAggregateOutputType | null
    _max: ChallengeCategoryMaxAggregateOutputType | null
  }

  export type ChallengeCategoryMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ChallengeCategoryMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ChallengeCategoryCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    _all: number
  }


  export type ChallengeCategoryMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
  }

  export type ChallengeCategoryMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
  }

  export type ChallengeCategoryCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type ChallengeCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which challengeCategory to aggregate.
     */
    where?: challengeCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challengeCategories to fetch.
     */
    orderBy?: challengeCategoryOrderByWithRelationInput | challengeCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: challengeCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challengeCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challengeCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned challengeCategories
    **/
    _count?: true | ChallengeCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeCategoryMaxAggregateInputType
  }

  export type GetChallengeCategoryAggregateType<T extends ChallengeCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateChallengeCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallengeCategory[P]>
      : GetScalarType<T[P], AggregateChallengeCategory[P]>
  }




  export type challengeCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challengeCategoryWhereInput
    orderBy?: challengeCategoryOrderByWithAggregationInput | challengeCategoryOrderByWithAggregationInput[]
    by: ChallengeCategoryScalarFieldEnum[] | ChallengeCategoryScalarFieldEnum
    having?: challengeCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeCategoryCountAggregateInputType | true
    _min?: ChallengeCategoryMinAggregateInputType
    _max?: ChallengeCategoryMaxAggregateInputType
  }

  export type ChallengeCategoryGroupByOutputType = {
    id: string
    title: string
    description: string
    createdAt: Date
    _count: ChallengeCategoryCountAggregateOutputType | null
    _min: ChallengeCategoryMinAggregateOutputType | null
    _max: ChallengeCategoryMaxAggregateOutputType | null
  }

  type GetChallengeCategoryGroupByPayload<T extends challengeCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeCategoryGroupByOutputType[P]>
        }
      >
    >


  export type challengeCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    challenges?: boolean | challengeCategory$challengesArgs<ExtArgs>
    _count?: boolean | ChallengeCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeCategory"]>



  export type challengeCategorySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type challengeCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "createdAt", ExtArgs["result"]["challengeCategory"]>
  export type challengeCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges?: boolean | challengeCategory$challengesArgs<ExtArgs>
    _count?: boolean | ChallengeCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $challengeCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "challengeCategory"
    objects: {
      challenges: Prisma.$challengePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      createdAt: Date
    }, ExtArgs["result"]["challengeCategory"]>
    composites: {}
  }

  type challengeCategoryGetPayload<S extends boolean | null | undefined | challengeCategoryDefaultArgs> = $Result.GetResult<Prisma.$challengeCategoryPayload, S>

  type challengeCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<challengeCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeCategoryCountAggregateInputType | true
    }

  export interface challengeCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['challengeCategory'], meta: { name: 'challengeCategory' } }
    /**
     * Find zero or one ChallengeCategory that matches the filter.
     * @param {challengeCategoryFindUniqueArgs} args - Arguments to find a ChallengeCategory
     * @example
     * // Get one ChallengeCategory
     * const challengeCategory = await prisma.challengeCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends challengeCategoryFindUniqueArgs>(args: SelectSubset<T, challengeCategoryFindUniqueArgs<ExtArgs>>): Prisma__challengeCategoryClient<$Result.GetResult<Prisma.$challengeCategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ChallengeCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {challengeCategoryFindUniqueOrThrowArgs} args - Arguments to find a ChallengeCategory
     * @example
     * // Get one ChallengeCategory
     * const challengeCategory = await prisma.challengeCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends challengeCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, challengeCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__challengeCategoryClient<$Result.GetResult<Prisma.$challengeCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ChallengeCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengeCategoryFindFirstArgs} args - Arguments to find a ChallengeCategory
     * @example
     * // Get one ChallengeCategory
     * const challengeCategory = await prisma.challengeCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends challengeCategoryFindFirstArgs>(args?: SelectSubset<T, challengeCategoryFindFirstArgs<ExtArgs>>): Prisma__challengeCategoryClient<$Result.GetResult<Prisma.$challengeCategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ChallengeCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengeCategoryFindFirstOrThrowArgs} args - Arguments to find a ChallengeCategory
     * @example
     * // Get one ChallengeCategory
     * const challengeCategory = await prisma.challengeCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends challengeCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, challengeCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__challengeCategoryClient<$Result.GetResult<Prisma.$challengeCategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ChallengeCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengeCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChallengeCategories
     * const challengeCategories = await prisma.challengeCategory.findMany()
     * 
     * // Get first 10 ChallengeCategories
     * const challengeCategories = await prisma.challengeCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeCategoryWithIdOnly = await prisma.challengeCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends challengeCategoryFindManyArgs>(args?: SelectSubset<T, challengeCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challengeCategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ChallengeCategory.
     * @param {challengeCategoryCreateArgs} args - Arguments to create a ChallengeCategory.
     * @example
     * // Create one ChallengeCategory
     * const ChallengeCategory = await prisma.challengeCategory.create({
     *   data: {
     *     // ... data to create a ChallengeCategory
     *   }
     * })
     * 
     */
    create<T extends challengeCategoryCreateArgs>(args: SelectSubset<T, challengeCategoryCreateArgs<ExtArgs>>): Prisma__challengeCategoryClient<$Result.GetResult<Prisma.$challengeCategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ChallengeCategories.
     * @param {challengeCategoryCreateManyArgs} args - Arguments to create many ChallengeCategories.
     * @example
     * // Create many ChallengeCategories
     * const challengeCategory = await prisma.challengeCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends challengeCategoryCreateManyArgs>(args?: SelectSubset<T, challengeCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChallengeCategory.
     * @param {challengeCategoryDeleteArgs} args - Arguments to delete one ChallengeCategory.
     * @example
     * // Delete one ChallengeCategory
     * const ChallengeCategory = await prisma.challengeCategory.delete({
     *   where: {
     *     // ... filter to delete one ChallengeCategory
     *   }
     * })
     * 
     */
    delete<T extends challengeCategoryDeleteArgs>(args: SelectSubset<T, challengeCategoryDeleteArgs<ExtArgs>>): Prisma__challengeCategoryClient<$Result.GetResult<Prisma.$challengeCategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ChallengeCategory.
     * @param {challengeCategoryUpdateArgs} args - Arguments to update one ChallengeCategory.
     * @example
     * // Update one ChallengeCategory
     * const challengeCategory = await prisma.challengeCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends challengeCategoryUpdateArgs>(args: SelectSubset<T, challengeCategoryUpdateArgs<ExtArgs>>): Prisma__challengeCategoryClient<$Result.GetResult<Prisma.$challengeCategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ChallengeCategories.
     * @param {challengeCategoryDeleteManyArgs} args - Arguments to filter ChallengeCategories to delete.
     * @example
     * // Delete a few ChallengeCategories
     * const { count } = await prisma.challengeCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends challengeCategoryDeleteManyArgs>(args?: SelectSubset<T, challengeCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengeCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChallengeCategories
     * const challengeCategory = await prisma.challengeCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends challengeCategoryUpdateManyArgs>(args: SelectSubset<T, challengeCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChallengeCategory.
     * @param {challengeCategoryUpsertArgs} args - Arguments to update or create a ChallengeCategory.
     * @example
     * // Update or create a ChallengeCategory
     * const challengeCategory = await prisma.challengeCategory.upsert({
     *   create: {
     *     // ... data to create a ChallengeCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChallengeCategory we want to update
     *   }
     * })
     */
    upsert<T extends challengeCategoryUpsertArgs>(args: SelectSubset<T, challengeCategoryUpsertArgs<ExtArgs>>): Prisma__challengeCategoryClient<$Result.GetResult<Prisma.$challengeCategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ChallengeCategories that matches the filter.
     * @param {challengeCategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const challengeCategory = await prisma.challengeCategory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: challengeCategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ChallengeCategory.
     * @param {challengeCategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const challengeCategory = await prisma.challengeCategory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: challengeCategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ChallengeCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengeCategoryCountArgs} args - Arguments to filter ChallengeCategories to count.
     * @example
     * // Count the number of ChallengeCategories
     * const count = await prisma.challengeCategory.count({
     *   where: {
     *     // ... the filter for the ChallengeCategories we want to count
     *   }
     * })
    **/
    count<T extends challengeCategoryCountArgs>(
      args?: Subset<T, challengeCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChallengeCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallengeCategoryAggregateArgs>(args: Subset<T, ChallengeCategoryAggregateArgs>): Prisma.PrismaPromise<GetChallengeCategoryAggregateType<T>>

    /**
     * Group by ChallengeCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengeCategoryGroupByArgs} args - Group by arguments.
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
      T extends challengeCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: challengeCategoryGroupByArgs['orderBy'] }
        : { orderBy?: challengeCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, challengeCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the challengeCategory model
   */
  readonly fields: challengeCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for challengeCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__challengeCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenges<T extends challengeCategory$challengesArgs<ExtArgs> = {}>(args?: Subset<T, challengeCategory$challengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the challengeCategory model
   */ 
  interface challengeCategoryFieldRefs {
    readonly id: FieldRef<"challengeCategory", 'String'>
    readonly title: FieldRef<"challengeCategory", 'String'>
    readonly description: FieldRef<"challengeCategory", 'String'>
    readonly createdAt: FieldRef<"challengeCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * challengeCategory findUnique
   */
  export type challengeCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challengeCategory
     */
    select?: challengeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the challengeCategory
     */
    omit?: challengeCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeCategoryInclude<ExtArgs> | null
    /**
     * Filter, which challengeCategory to fetch.
     */
    where: challengeCategoryWhereUniqueInput
  }

  /**
   * challengeCategory findUniqueOrThrow
   */
  export type challengeCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challengeCategory
     */
    select?: challengeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the challengeCategory
     */
    omit?: challengeCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeCategoryInclude<ExtArgs> | null
    /**
     * Filter, which challengeCategory to fetch.
     */
    where: challengeCategoryWhereUniqueInput
  }

  /**
   * challengeCategory findFirst
   */
  export type challengeCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challengeCategory
     */
    select?: challengeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the challengeCategory
     */
    omit?: challengeCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeCategoryInclude<ExtArgs> | null
    /**
     * Filter, which challengeCategory to fetch.
     */
    where?: challengeCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challengeCategories to fetch.
     */
    orderBy?: challengeCategoryOrderByWithRelationInput | challengeCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for challengeCategories.
     */
    cursor?: challengeCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challengeCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challengeCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of challengeCategories.
     */
    distinct?: ChallengeCategoryScalarFieldEnum | ChallengeCategoryScalarFieldEnum[]
  }

  /**
   * challengeCategory findFirstOrThrow
   */
  export type challengeCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challengeCategory
     */
    select?: challengeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the challengeCategory
     */
    omit?: challengeCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeCategoryInclude<ExtArgs> | null
    /**
     * Filter, which challengeCategory to fetch.
     */
    where?: challengeCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challengeCategories to fetch.
     */
    orderBy?: challengeCategoryOrderByWithRelationInput | challengeCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for challengeCategories.
     */
    cursor?: challengeCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challengeCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challengeCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of challengeCategories.
     */
    distinct?: ChallengeCategoryScalarFieldEnum | ChallengeCategoryScalarFieldEnum[]
  }

  /**
   * challengeCategory findMany
   */
  export type challengeCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challengeCategory
     */
    select?: challengeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the challengeCategory
     */
    omit?: challengeCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeCategoryInclude<ExtArgs> | null
    /**
     * Filter, which challengeCategories to fetch.
     */
    where?: challengeCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challengeCategories to fetch.
     */
    orderBy?: challengeCategoryOrderByWithRelationInput | challengeCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing challengeCategories.
     */
    cursor?: challengeCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challengeCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challengeCategories.
     */
    skip?: number
    distinct?: ChallengeCategoryScalarFieldEnum | ChallengeCategoryScalarFieldEnum[]
  }

  /**
   * challengeCategory create
   */
  export type challengeCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challengeCategory
     */
    select?: challengeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the challengeCategory
     */
    omit?: challengeCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a challengeCategory.
     */
    data: XOR<challengeCategoryCreateInput, challengeCategoryUncheckedCreateInput>
  }

  /**
   * challengeCategory createMany
   */
  export type challengeCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many challengeCategories.
     */
    data: challengeCategoryCreateManyInput | challengeCategoryCreateManyInput[]
  }

  /**
   * challengeCategory update
   */
  export type challengeCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challengeCategory
     */
    select?: challengeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the challengeCategory
     */
    omit?: challengeCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a challengeCategory.
     */
    data: XOR<challengeCategoryUpdateInput, challengeCategoryUncheckedUpdateInput>
    /**
     * Choose, which challengeCategory to update.
     */
    where: challengeCategoryWhereUniqueInput
  }

  /**
   * challengeCategory updateMany
   */
  export type challengeCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update challengeCategories.
     */
    data: XOR<challengeCategoryUpdateManyMutationInput, challengeCategoryUncheckedUpdateManyInput>
    /**
     * Filter which challengeCategories to update
     */
    where?: challengeCategoryWhereInput
    /**
     * Limit how many challengeCategories to update.
     */
    limit?: number
  }

  /**
   * challengeCategory upsert
   */
  export type challengeCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challengeCategory
     */
    select?: challengeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the challengeCategory
     */
    omit?: challengeCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the challengeCategory to update in case it exists.
     */
    where: challengeCategoryWhereUniqueInput
    /**
     * In case the challengeCategory found by the `where` argument doesn't exist, create a new challengeCategory with this data.
     */
    create: XOR<challengeCategoryCreateInput, challengeCategoryUncheckedCreateInput>
    /**
     * In case the challengeCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<challengeCategoryUpdateInput, challengeCategoryUncheckedUpdateInput>
  }

  /**
   * challengeCategory delete
   */
  export type challengeCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challengeCategory
     */
    select?: challengeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the challengeCategory
     */
    omit?: challengeCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeCategoryInclude<ExtArgs> | null
    /**
     * Filter which challengeCategory to delete.
     */
    where: challengeCategoryWhereUniqueInput
  }

  /**
   * challengeCategory deleteMany
   */
  export type challengeCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which challengeCategories to delete
     */
    where?: challengeCategoryWhereInput
    /**
     * Limit how many challengeCategories to delete.
     */
    limit?: number
  }

  /**
   * challengeCategory findRaw
   */
  export type challengeCategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * challengeCategory aggregateRaw
   */
  export type challengeCategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * challengeCategory.challenges
   */
  export type challengeCategory$challengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    where?: challengeWhereInput
    orderBy?: challengeOrderByWithRelationInput | challengeOrderByWithRelationInput[]
    cursor?: challengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * challengeCategory without action
   */
  export type challengeCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challengeCategory
     */
    select?: challengeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the challengeCategory
     */
    omit?: challengeCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeCategoryInclude<ExtArgs> | null
  }


  /**
   * Model skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skill to aggregate.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type skillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillWhereInput
    orderBy?: skillOrderByWithAggregationInput | skillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: skillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends skillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type skillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    challenges?: boolean | skill$challengesArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>



  export type skillSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type skillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["skill"]>
  export type skillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges?: boolean | skill$challengesArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $skillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skill"
    objects: {
      challenges: Prisma.$challengePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type skillGetPayload<S extends boolean | null | undefined | skillDefaultArgs> = $Result.GetResult<Prisma.$skillPayload, S>

  type skillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface skillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skill'], meta: { name: 'skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {skillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skillFindUniqueArgs>(args: SelectSubset<T, skillFindUniqueArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skillFindUniqueOrThrowArgs>(args: SelectSubset<T, skillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skillFindFirstArgs>(args?: SelectSubset<T, skillFindFirstArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skillFindFirstOrThrowArgs>(args?: SelectSubset<T, skillFindFirstOrThrowArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends skillFindManyArgs>(args?: SelectSubset<T, skillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Skill.
     * @param {skillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends skillCreateArgs>(args: SelectSubset<T, skillCreateArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Skills.
     * @param {skillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skillCreateManyArgs>(args?: SelectSubset<T, skillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skill.
     * @param {skillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends skillDeleteArgs>(args: SelectSubset<T, skillDeleteArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Skill.
     * @param {skillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skillUpdateArgs>(args: SelectSubset<T, skillUpdateArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Skills.
     * @param {skillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skillDeleteManyArgs>(args?: SelectSubset<T, skillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skillUpdateManyArgs>(args: SelectSubset<T, skillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skill.
     * @param {skillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends skillUpsertArgs>(args: SelectSubset<T, skillUpsertArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * @param {skillFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const skill = await prisma.skill.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: skillFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Skill.
     * @param {skillAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const skill = await prisma.skill.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: skillAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends skillCountArgs>(
      args?: Subset<T, skillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillGroupByArgs} args - Group by arguments.
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
      T extends skillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skillGroupByArgs['orderBy'] }
        : { orderBy?: skillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, skillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skill model
   */
  readonly fields: skillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenges<T extends skill$challengesArgs<ExtArgs> = {}>(args?: Subset<T, skill$challengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challengePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the skill model
   */ 
  interface skillFieldRefs {
    readonly id: FieldRef<"skill", 'String'>
    readonly name: FieldRef<"skill", 'String'>
    readonly createdAt: FieldRef<"skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * skill findUnique
   */
  export type skillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill findUniqueOrThrow
   */
  export type skillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill findFirst
   */
  export type skillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill findFirstOrThrow
   */
  export type skillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill findMany
   */
  export type skillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill create
   */
  export type skillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * The data needed to create a skill.
     */
    data: XOR<skillCreateInput, skillUncheckedCreateInput>
  }

  /**
   * skill createMany
   */
  export type skillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skills.
     */
    data: skillCreateManyInput | skillCreateManyInput[]
  }

  /**
   * skill update
   */
  export type skillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * The data needed to update a skill.
     */
    data: XOR<skillUpdateInput, skillUncheckedUpdateInput>
    /**
     * Choose, which skill to update.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill updateMany
   */
  export type skillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skills.
     */
    data: XOR<skillUpdateManyMutationInput, skillUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillWhereInput
    /**
     * Limit how many skills to update.
     */
    limit?: number
  }

  /**
   * skill upsert
   */
  export type skillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * The filter to search for the skill to update in case it exists.
     */
    where: skillWhereUniqueInput
    /**
     * In case the skill found by the `where` argument doesn't exist, create a new skill with this data.
     */
    create: XOR<skillCreateInput, skillUncheckedCreateInput>
    /**
     * In case the skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skillUpdateInput, skillUncheckedUpdateInput>
  }

  /**
   * skill delete
   */
  export type skillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter which skill to delete.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill deleteMany
   */
  export type skillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skills to delete
     */
    where?: skillWhereInput
    /**
     * Limit how many skills to delete.
     */
    limit?: number
  }

  /**
   * skill findRaw
   */
  export type skillFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * skill aggregateRaw
   */
  export type skillAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * skill.challenges
   */
  export type skill$challengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge
     */
    select?: challengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge
     */
    omit?: challengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengeInclude<ExtArgs> | null
    where?: challengeWhereInput
    orderBy?: challengeOrderByWithRelationInput | challengeOrderByWithRelationInput[]
    cursor?: challengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * skill without action
   */
  export type skillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ChallengeScalarFieldEnum: {
    id: 'id',
    challengeTitle: 'challengeTitle',
    description: 'description',
    projectBrief: 'projectBrief',
    startDate: 'startDate',
    deadline: 'deadline',
    moneyPrize: 'moneyPrize',
    seniority: 'seniority',
    categoryId: 'categoryId',
    skillId: 'skillId',
    submissionLink: 'submissionLink',
    contactEmail: 'contactEmail',
    createdAt: 'createdAt'
  };

  export type ChallengeScalarFieldEnum = (typeof ChallengeScalarFieldEnum)[keyof typeof ChallengeScalarFieldEnum]


  export const ChallengeCategoryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type ChallengeCategoryScalarFieldEnum = (typeof ChallengeCategoryScalarFieldEnum)[keyof typeof ChallengeCategoryScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


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


  export type challengeWhereInput = {
    AND?: challengeWhereInput | challengeWhereInput[]
    OR?: challengeWhereInput[]
    NOT?: challengeWhereInput | challengeWhereInput[]
    id?: StringFilter<"challenge"> | string
    challengeTitle?: StringFilter<"challenge"> | string
    description?: StringFilter<"challenge"> | string
    projectBrief?: StringFilter<"challenge"> | string
    startDate?: DateTimeFilter<"challenge"> | Date | string
    deadline?: DateTimeFilter<"challenge"> | Date | string
    moneyPrize?: StringFilter<"challenge"> | string
    seniority?: StringNullableListFilter<"challenge">
    categoryId?: StringFilter<"challenge"> | string
    skillId?: StringNullableListFilter<"challenge">
    submissionLink?: StringFilter<"challenge"> | string
    contactEmail?: StringFilter<"challenge"> | string
    createdAt?: DateTimeFilter<"challenge"> | Date | string
    category?: XOR<ChallengeCategoryScalarRelationFilter, challengeCategoryWhereInput>
    skills?: XOR<SkillScalarRelationFilter, skillWhereInput>
  }

  export type challengeOrderByWithRelationInput = {
    id?: SortOrder
    challengeTitle?: SortOrder
    description?: SortOrder
    projectBrief?: SortOrder
    startDate?: SortOrder
    deadline?: SortOrder
    moneyPrize?: SortOrder
    seniority?: SortOrder
    categoryId?: SortOrder
    skillId?: SortOrder
    submissionLink?: SortOrder
    contactEmail?: SortOrder
    createdAt?: SortOrder
    category?: challengeCategoryOrderByWithRelationInput
    skills?: skillOrderByWithRelationInput
  }

  export type challengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    challengeTitle?: string
    AND?: challengeWhereInput | challengeWhereInput[]
    OR?: challengeWhereInput[]
    NOT?: challengeWhereInput | challengeWhereInput[]
    description?: StringFilter<"challenge"> | string
    projectBrief?: StringFilter<"challenge"> | string
    startDate?: DateTimeFilter<"challenge"> | Date | string
    deadline?: DateTimeFilter<"challenge"> | Date | string
    moneyPrize?: StringFilter<"challenge"> | string
    seniority?: StringNullableListFilter<"challenge">
    categoryId?: StringFilter<"challenge"> | string
    skillId?: StringNullableListFilter<"challenge">
    submissionLink?: StringFilter<"challenge"> | string
    contactEmail?: StringFilter<"challenge"> | string
    createdAt?: DateTimeFilter<"challenge"> | Date | string
    category?: XOR<ChallengeCategoryScalarRelationFilter, challengeCategoryWhereInput>
    skills?: XOR<SkillScalarRelationFilter, skillWhereInput>
  }, "id" | "challengeTitle">

  export type challengeOrderByWithAggregationInput = {
    id?: SortOrder
    challengeTitle?: SortOrder
    description?: SortOrder
    projectBrief?: SortOrder
    startDate?: SortOrder
    deadline?: SortOrder
    moneyPrize?: SortOrder
    seniority?: SortOrder
    categoryId?: SortOrder
    skillId?: SortOrder
    submissionLink?: SortOrder
    contactEmail?: SortOrder
    createdAt?: SortOrder
    _count?: challengeCountOrderByAggregateInput
    _max?: challengeMaxOrderByAggregateInput
    _min?: challengeMinOrderByAggregateInput
  }

  export type challengeScalarWhereWithAggregatesInput = {
    AND?: challengeScalarWhereWithAggregatesInput | challengeScalarWhereWithAggregatesInput[]
    OR?: challengeScalarWhereWithAggregatesInput[]
    NOT?: challengeScalarWhereWithAggregatesInput | challengeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"challenge"> | string
    challengeTitle?: StringWithAggregatesFilter<"challenge"> | string
    description?: StringWithAggregatesFilter<"challenge"> | string
    projectBrief?: StringWithAggregatesFilter<"challenge"> | string
    startDate?: DateTimeWithAggregatesFilter<"challenge"> | Date | string
    deadline?: DateTimeWithAggregatesFilter<"challenge"> | Date | string
    moneyPrize?: StringWithAggregatesFilter<"challenge"> | string
    seniority?: StringNullableListFilter<"challenge">
    categoryId?: StringWithAggregatesFilter<"challenge"> | string
    skillId?: StringNullableListFilter<"challenge">
    submissionLink?: StringWithAggregatesFilter<"challenge"> | string
    contactEmail?: StringWithAggregatesFilter<"challenge"> | string
    createdAt?: DateTimeWithAggregatesFilter<"challenge"> | Date | string
  }

  export type challengeCategoryWhereInput = {
    AND?: challengeCategoryWhereInput | challengeCategoryWhereInput[]
    OR?: challengeCategoryWhereInput[]
    NOT?: challengeCategoryWhereInput | challengeCategoryWhereInput[]
    id?: StringFilter<"challengeCategory"> | string
    title?: StringFilter<"challengeCategory"> | string
    description?: StringFilter<"challengeCategory"> | string
    createdAt?: DateTimeFilter<"challengeCategory"> | Date | string
    challenges?: ChallengeListRelationFilter
  }

  export type challengeCategoryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    challenges?: challengeOrderByRelationAggregateInput
  }

  export type challengeCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: challengeCategoryWhereInput | challengeCategoryWhereInput[]
    OR?: challengeCategoryWhereInput[]
    NOT?: challengeCategoryWhereInput | challengeCategoryWhereInput[]
    description?: StringFilter<"challengeCategory"> | string
    createdAt?: DateTimeFilter<"challengeCategory"> | Date | string
    challenges?: ChallengeListRelationFilter
  }, "id" | "title">

  export type challengeCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: challengeCategoryCountOrderByAggregateInput
    _max?: challengeCategoryMaxOrderByAggregateInput
    _min?: challengeCategoryMinOrderByAggregateInput
  }

  export type challengeCategoryScalarWhereWithAggregatesInput = {
    AND?: challengeCategoryScalarWhereWithAggregatesInput | challengeCategoryScalarWhereWithAggregatesInput[]
    OR?: challengeCategoryScalarWhereWithAggregatesInput[]
    NOT?: challengeCategoryScalarWhereWithAggregatesInput | challengeCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"challengeCategory"> | string
    title?: StringWithAggregatesFilter<"challengeCategory"> | string
    description?: StringWithAggregatesFilter<"challengeCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"challengeCategory"> | Date | string
  }

  export type skillWhereInput = {
    AND?: skillWhereInput | skillWhereInput[]
    OR?: skillWhereInput[]
    NOT?: skillWhereInput | skillWhereInput[]
    id?: StringFilter<"skill"> | string
    name?: StringFilter<"skill"> | string
    createdAt?: DateTimeFilter<"skill"> | Date | string
    challenges?: ChallengeListRelationFilter
  }

  export type skillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    challenges?: challengeOrderByRelationAggregateInput
  }

  export type skillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: skillWhereInput | skillWhereInput[]
    OR?: skillWhereInput[]
    NOT?: skillWhereInput | skillWhereInput[]
    createdAt?: DateTimeFilter<"skill"> | Date | string
    challenges?: ChallengeListRelationFilter
  }, "id" | "name">

  export type skillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: skillCountOrderByAggregateInput
    _max?: skillMaxOrderByAggregateInput
    _min?: skillMinOrderByAggregateInput
  }

  export type skillScalarWhereWithAggregatesInput = {
    AND?: skillScalarWhereWithAggregatesInput | skillScalarWhereWithAggregatesInput[]
    OR?: skillScalarWhereWithAggregatesInput[]
    NOT?: skillScalarWhereWithAggregatesInput | skillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"skill"> | string
    name?: StringWithAggregatesFilter<"skill"> | string
    createdAt?: DateTimeWithAggregatesFilter<"skill"> | Date | string
  }

  export type challengeCreateInput = {
    id?: string
    challengeTitle: string
    description: string
    projectBrief: string
    startDate: Date | string
    deadline: Date | string
    moneyPrize: string
    seniority?: challengeCreateseniorityInput | string[]
    submissionLink: string
    contactEmail: string
    createdAt?: Date | string
    category: challengeCategoryCreateNestedOneWithoutChallengesInput
    skills: skillCreateNestedOneWithoutChallengesInput
  }

  export type challengeUncheckedCreateInput = {
    id?: string
    challengeTitle: string
    description: string
    projectBrief: string
    startDate: Date | string
    deadline: Date | string
    moneyPrize: string
    seniority?: challengeCreateseniorityInput | string[]
    categoryId: string
    skillId?: challengeCreateskillIdInput | string[]
    submissionLink: string
    contactEmail: string
    createdAt?: Date | string
  }

  export type challengeUpdateInput = {
    challengeTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    moneyPrize?: StringFieldUpdateOperationsInput | string
    seniority?: challengeUpdateseniorityInput | string[]
    submissionLink?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: challengeCategoryUpdateOneRequiredWithoutChallengesNestedInput
    skills?: skillUpdateOneRequiredWithoutChallengesNestedInput
  }

  export type challengeUncheckedUpdateInput = {
    challengeTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    moneyPrize?: StringFieldUpdateOperationsInput | string
    seniority?: challengeUpdateseniorityInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    skillId?: challengeUpdateskillIdInput | string[]
    submissionLink?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challengeCreateManyInput = {
    id?: string
    challengeTitle: string
    description: string
    projectBrief: string
    startDate: Date | string
    deadline: Date | string
    moneyPrize: string
    seniority?: challengeCreateseniorityInput | string[]
    categoryId: string
    skillId?: challengeCreateskillIdInput | string[]
    submissionLink: string
    contactEmail: string
    createdAt?: Date | string
  }

  export type challengeUpdateManyMutationInput = {
    challengeTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    moneyPrize?: StringFieldUpdateOperationsInput | string
    seniority?: challengeUpdateseniorityInput | string[]
    submissionLink?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challengeUncheckedUpdateManyInput = {
    challengeTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    moneyPrize?: StringFieldUpdateOperationsInput | string
    seniority?: challengeUpdateseniorityInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    skillId?: challengeUpdateskillIdInput | string[]
    submissionLink?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challengeCategoryCreateInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    challenges?: challengeCreateNestedManyWithoutCategoryInput
  }

  export type challengeCategoryUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    challenges?: challengeUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type challengeCategoryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenges?: challengeUpdateManyWithoutCategoryNestedInput
  }

  export type challengeCategoryUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenges?: challengeUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type challengeCategoryCreateManyInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
  }

  export type challengeCategoryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challengeCategoryUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    challenges?: challengeCreateNestedManyWithoutSkillsInput
  }

  export type skillUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    challenges?: challengeUncheckedCreateNestedManyWithoutSkillsInput
  }

  export type skillUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenges?: challengeUpdateManyWithoutSkillsNestedInput
  }

  export type skillUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenges?: challengeUncheckedUpdateManyWithoutSkillsNestedInput
  }

  export type skillCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type skillUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ChallengeCategoryScalarRelationFilter = {
    is?: challengeCategoryWhereInput
    isNot?: challengeCategoryWhereInput
  }

  export type SkillScalarRelationFilter = {
    is?: skillWhereInput
    isNot?: skillWhereInput
  }

  export type challengeCountOrderByAggregateInput = {
    id?: SortOrder
    challengeTitle?: SortOrder
    description?: SortOrder
    projectBrief?: SortOrder
    startDate?: SortOrder
    deadline?: SortOrder
    moneyPrize?: SortOrder
    seniority?: SortOrder
    categoryId?: SortOrder
    skillId?: SortOrder
    submissionLink?: SortOrder
    contactEmail?: SortOrder
    createdAt?: SortOrder
  }

  export type challengeMaxOrderByAggregateInput = {
    id?: SortOrder
    challengeTitle?: SortOrder
    description?: SortOrder
    projectBrief?: SortOrder
    startDate?: SortOrder
    deadline?: SortOrder
    moneyPrize?: SortOrder
    categoryId?: SortOrder
    submissionLink?: SortOrder
    contactEmail?: SortOrder
    createdAt?: SortOrder
  }

  export type challengeMinOrderByAggregateInput = {
    id?: SortOrder
    challengeTitle?: SortOrder
    description?: SortOrder
    projectBrief?: SortOrder
    startDate?: SortOrder
    deadline?: SortOrder
    moneyPrize?: SortOrder
    categoryId?: SortOrder
    submissionLink?: SortOrder
    contactEmail?: SortOrder
    createdAt?: SortOrder
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

  export type ChallengeListRelationFilter = {
    every?: challengeWhereInput
    some?: challengeWhereInput
    none?: challengeWhereInput
  }

  export type challengeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type challengeCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type challengeCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type challengeCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type skillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type skillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type skillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type challengeCreateseniorityInput = {
    set: string[]
  }

  export type challengeCategoryCreateNestedOneWithoutChallengesInput = {
    create?: XOR<challengeCategoryCreateWithoutChallengesInput, challengeCategoryUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: challengeCategoryCreateOrConnectWithoutChallengesInput
    connect?: challengeCategoryWhereUniqueInput
  }

  export type skillCreateNestedOneWithoutChallengesInput = {
    create?: XOR<skillCreateWithoutChallengesInput, skillUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: skillCreateOrConnectWithoutChallengesInput
    connect?: skillWhereUniqueInput
  }

  export type challengeCreateskillIdInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type challengeUpdateseniorityInput = {
    set?: string[]
    push?: string | string[]
  }

  export type challengeCategoryUpdateOneRequiredWithoutChallengesNestedInput = {
    create?: XOR<challengeCategoryCreateWithoutChallengesInput, challengeCategoryUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: challengeCategoryCreateOrConnectWithoutChallengesInput
    upsert?: challengeCategoryUpsertWithoutChallengesInput
    connect?: challengeCategoryWhereUniqueInput
    update?: XOR<XOR<challengeCategoryUpdateToOneWithWhereWithoutChallengesInput, challengeCategoryUpdateWithoutChallengesInput>, challengeCategoryUncheckedUpdateWithoutChallengesInput>
  }

  export type skillUpdateOneRequiredWithoutChallengesNestedInput = {
    create?: XOR<skillCreateWithoutChallengesInput, skillUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: skillCreateOrConnectWithoutChallengesInput
    upsert?: skillUpsertWithoutChallengesInput
    connect?: skillWhereUniqueInput
    update?: XOR<XOR<skillUpdateToOneWithWhereWithoutChallengesInput, skillUpdateWithoutChallengesInput>, skillUncheckedUpdateWithoutChallengesInput>
  }

  export type challengeUpdateskillIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type challengeCreateNestedManyWithoutCategoryInput = {
    create?: XOR<challengeCreateWithoutCategoryInput, challengeUncheckedCreateWithoutCategoryInput> | challengeCreateWithoutCategoryInput[] | challengeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: challengeCreateOrConnectWithoutCategoryInput | challengeCreateOrConnectWithoutCategoryInput[]
    createMany?: challengeCreateManyCategoryInputEnvelope
    connect?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
  }

  export type challengeUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<challengeCreateWithoutCategoryInput, challengeUncheckedCreateWithoutCategoryInput> | challengeCreateWithoutCategoryInput[] | challengeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: challengeCreateOrConnectWithoutCategoryInput | challengeCreateOrConnectWithoutCategoryInput[]
    createMany?: challengeCreateManyCategoryInputEnvelope
    connect?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
  }

  export type challengeUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<challengeCreateWithoutCategoryInput, challengeUncheckedCreateWithoutCategoryInput> | challengeCreateWithoutCategoryInput[] | challengeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: challengeCreateOrConnectWithoutCategoryInput | challengeCreateOrConnectWithoutCategoryInput[]
    upsert?: challengeUpsertWithWhereUniqueWithoutCategoryInput | challengeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: challengeCreateManyCategoryInputEnvelope
    set?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    disconnect?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    delete?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    connect?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    update?: challengeUpdateWithWhereUniqueWithoutCategoryInput | challengeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: challengeUpdateManyWithWhereWithoutCategoryInput | challengeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: challengeScalarWhereInput | challengeScalarWhereInput[]
  }

  export type challengeUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<challengeCreateWithoutCategoryInput, challengeUncheckedCreateWithoutCategoryInput> | challengeCreateWithoutCategoryInput[] | challengeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: challengeCreateOrConnectWithoutCategoryInput | challengeCreateOrConnectWithoutCategoryInput[]
    upsert?: challengeUpsertWithWhereUniqueWithoutCategoryInput | challengeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: challengeCreateManyCategoryInputEnvelope
    set?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    disconnect?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    delete?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    connect?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    update?: challengeUpdateWithWhereUniqueWithoutCategoryInput | challengeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: challengeUpdateManyWithWhereWithoutCategoryInput | challengeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: challengeScalarWhereInput | challengeScalarWhereInput[]
  }

  export type challengeCreateNestedManyWithoutSkillsInput = {
    create?: XOR<challengeCreateWithoutSkillsInput, challengeUncheckedCreateWithoutSkillsInput> | challengeCreateWithoutSkillsInput[] | challengeUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: challengeCreateOrConnectWithoutSkillsInput | challengeCreateOrConnectWithoutSkillsInput[]
    createMany?: challengeCreateManySkillsInputEnvelope
    connect?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
  }

  export type challengeUncheckedCreateNestedManyWithoutSkillsInput = {
    create?: XOR<challengeCreateWithoutSkillsInput, challengeUncheckedCreateWithoutSkillsInput> | challengeCreateWithoutSkillsInput[] | challengeUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: challengeCreateOrConnectWithoutSkillsInput | challengeCreateOrConnectWithoutSkillsInput[]
    createMany?: challengeCreateManySkillsInputEnvelope
    connect?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
  }

  export type challengeUpdateManyWithoutSkillsNestedInput = {
    create?: XOR<challengeCreateWithoutSkillsInput, challengeUncheckedCreateWithoutSkillsInput> | challengeCreateWithoutSkillsInput[] | challengeUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: challengeCreateOrConnectWithoutSkillsInput | challengeCreateOrConnectWithoutSkillsInput[]
    upsert?: challengeUpsertWithWhereUniqueWithoutSkillsInput | challengeUpsertWithWhereUniqueWithoutSkillsInput[]
    createMany?: challengeCreateManySkillsInputEnvelope
    set?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    disconnect?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    delete?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    connect?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    update?: challengeUpdateWithWhereUniqueWithoutSkillsInput | challengeUpdateWithWhereUniqueWithoutSkillsInput[]
    updateMany?: challengeUpdateManyWithWhereWithoutSkillsInput | challengeUpdateManyWithWhereWithoutSkillsInput[]
    deleteMany?: challengeScalarWhereInput | challengeScalarWhereInput[]
  }

  export type challengeUncheckedUpdateManyWithoutSkillsNestedInput = {
    create?: XOR<challengeCreateWithoutSkillsInput, challengeUncheckedCreateWithoutSkillsInput> | challengeCreateWithoutSkillsInput[] | challengeUncheckedCreateWithoutSkillsInput[]
    connectOrCreate?: challengeCreateOrConnectWithoutSkillsInput | challengeCreateOrConnectWithoutSkillsInput[]
    upsert?: challengeUpsertWithWhereUniqueWithoutSkillsInput | challengeUpsertWithWhereUniqueWithoutSkillsInput[]
    createMany?: challengeCreateManySkillsInputEnvelope
    set?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    disconnect?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    delete?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    connect?: challengeWhereUniqueInput | challengeWhereUniqueInput[]
    update?: challengeUpdateWithWhereUniqueWithoutSkillsInput | challengeUpdateWithWhereUniqueWithoutSkillsInput[]
    updateMany?: challengeUpdateManyWithWhereWithoutSkillsInput | challengeUpdateManyWithWhereWithoutSkillsInput[]
    deleteMany?: challengeScalarWhereInput | challengeScalarWhereInput[]
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

  export type challengeCategoryCreateWithoutChallengesInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
  }

  export type challengeCategoryUncheckedCreateWithoutChallengesInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
  }

  export type challengeCategoryCreateOrConnectWithoutChallengesInput = {
    where: challengeCategoryWhereUniqueInput
    create: XOR<challengeCategoryCreateWithoutChallengesInput, challengeCategoryUncheckedCreateWithoutChallengesInput>
  }

  export type skillCreateWithoutChallengesInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type skillUncheckedCreateWithoutChallengesInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type skillCreateOrConnectWithoutChallengesInput = {
    where: skillWhereUniqueInput
    create: XOR<skillCreateWithoutChallengesInput, skillUncheckedCreateWithoutChallengesInput>
  }

  export type challengeCategoryUpsertWithoutChallengesInput = {
    update: XOR<challengeCategoryUpdateWithoutChallengesInput, challengeCategoryUncheckedUpdateWithoutChallengesInput>
    create: XOR<challengeCategoryCreateWithoutChallengesInput, challengeCategoryUncheckedCreateWithoutChallengesInput>
    where?: challengeCategoryWhereInput
  }

  export type challengeCategoryUpdateToOneWithWhereWithoutChallengesInput = {
    where?: challengeCategoryWhereInput
    data: XOR<challengeCategoryUpdateWithoutChallengesInput, challengeCategoryUncheckedUpdateWithoutChallengesInput>
  }

  export type challengeCategoryUpdateWithoutChallengesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challengeCategoryUncheckedUpdateWithoutChallengesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillUpsertWithoutChallengesInput = {
    update: XOR<skillUpdateWithoutChallengesInput, skillUncheckedUpdateWithoutChallengesInput>
    create: XOR<skillCreateWithoutChallengesInput, skillUncheckedCreateWithoutChallengesInput>
    where?: skillWhereInput
  }

  export type skillUpdateToOneWithWhereWithoutChallengesInput = {
    where?: skillWhereInput
    data: XOR<skillUpdateWithoutChallengesInput, skillUncheckedUpdateWithoutChallengesInput>
  }

  export type skillUpdateWithoutChallengesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillUncheckedUpdateWithoutChallengesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challengeCreateWithoutCategoryInput = {
    id?: string
    challengeTitle: string
    description: string
    projectBrief: string
    startDate: Date | string
    deadline: Date | string
    moneyPrize: string
    seniority?: challengeCreateseniorityInput | string[]
    submissionLink: string
    contactEmail: string
    createdAt?: Date | string
    skills: skillCreateNestedOneWithoutChallengesInput
  }

  export type challengeUncheckedCreateWithoutCategoryInput = {
    id?: string
    challengeTitle: string
    description: string
    projectBrief: string
    startDate: Date | string
    deadline: Date | string
    moneyPrize: string
    seniority?: challengeCreateseniorityInput | string[]
    skillId?: challengeCreateskillIdInput | string[]
    submissionLink: string
    contactEmail: string
    createdAt?: Date | string
  }

  export type challengeCreateOrConnectWithoutCategoryInput = {
    where: challengeWhereUniqueInput
    create: XOR<challengeCreateWithoutCategoryInput, challengeUncheckedCreateWithoutCategoryInput>
  }

  export type challengeCreateManyCategoryInputEnvelope = {
    data: challengeCreateManyCategoryInput | challengeCreateManyCategoryInput[]
  }

  export type challengeUpsertWithWhereUniqueWithoutCategoryInput = {
    where: challengeWhereUniqueInput
    update: XOR<challengeUpdateWithoutCategoryInput, challengeUncheckedUpdateWithoutCategoryInput>
    create: XOR<challengeCreateWithoutCategoryInput, challengeUncheckedCreateWithoutCategoryInput>
  }

  export type challengeUpdateWithWhereUniqueWithoutCategoryInput = {
    where: challengeWhereUniqueInput
    data: XOR<challengeUpdateWithoutCategoryInput, challengeUncheckedUpdateWithoutCategoryInput>
  }

  export type challengeUpdateManyWithWhereWithoutCategoryInput = {
    where: challengeScalarWhereInput
    data: XOR<challengeUpdateManyMutationInput, challengeUncheckedUpdateManyWithoutCategoryInput>
  }

  export type challengeScalarWhereInput = {
    AND?: challengeScalarWhereInput | challengeScalarWhereInput[]
    OR?: challengeScalarWhereInput[]
    NOT?: challengeScalarWhereInput | challengeScalarWhereInput[]
    id?: StringFilter<"challenge"> | string
    challengeTitle?: StringFilter<"challenge"> | string
    description?: StringFilter<"challenge"> | string
    projectBrief?: StringFilter<"challenge"> | string
    startDate?: DateTimeFilter<"challenge"> | Date | string
    deadline?: DateTimeFilter<"challenge"> | Date | string
    moneyPrize?: StringFilter<"challenge"> | string
    seniority?: StringNullableListFilter<"challenge">
    categoryId?: StringFilter<"challenge"> | string
    skillId?: StringNullableListFilter<"challenge">
    submissionLink?: StringFilter<"challenge"> | string
    contactEmail?: StringFilter<"challenge"> | string
    createdAt?: DateTimeFilter<"challenge"> | Date | string
  }

  export type challengeCreateWithoutSkillsInput = {
    id?: string
    challengeTitle: string
    description: string
    projectBrief: string
    startDate: Date | string
    deadline: Date | string
    moneyPrize: string
    seniority?: challengeCreateseniorityInput | string[]
    submissionLink: string
    contactEmail: string
    createdAt?: Date | string
    category: challengeCategoryCreateNestedOneWithoutChallengesInput
  }

  export type challengeUncheckedCreateWithoutSkillsInput = {
    id?: string
    challengeTitle: string
    description: string
    projectBrief: string
    startDate: Date | string
    deadline: Date | string
    moneyPrize: string
    seniority?: challengeCreateseniorityInput | string[]
    categoryId: string
    submissionLink: string
    contactEmail: string
    createdAt?: Date | string
  }

  export type challengeCreateOrConnectWithoutSkillsInput = {
    where: challengeWhereUniqueInput
    create: XOR<challengeCreateWithoutSkillsInput, challengeUncheckedCreateWithoutSkillsInput>
  }

  export type challengeCreateManySkillsInputEnvelope = {
    data: challengeCreateManySkillsInput | challengeCreateManySkillsInput[]
  }

  export type challengeUpsertWithWhereUniqueWithoutSkillsInput = {
    where: challengeWhereUniqueInput
    update: XOR<challengeUpdateWithoutSkillsInput, challengeUncheckedUpdateWithoutSkillsInput>
    create: XOR<challengeCreateWithoutSkillsInput, challengeUncheckedCreateWithoutSkillsInput>
  }

  export type challengeUpdateWithWhereUniqueWithoutSkillsInput = {
    where: challengeWhereUniqueInput
    data: XOR<challengeUpdateWithoutSkillsInput, challengeUncheckedUpdateWithoutSkillsInput>
  }

  export type challengeUpdateManyWithWhereWithoutSkillsInput = {
    where: challengeScalarWhereInput
    data: XOR<challengeUpdateManyMutationInput, challengeUncheckedUpdateManyWithoutSkillsInput>
  }

  export type challengeCreateManyCategoryInput = {
    id?: string
    challengeTitle: string
    description: string
    projectBrief: string
    startDate: Date | string
    deadline: Date | string
    moneyPrize: string
    seniority?: challengeCreateseniorityInput | string[]
    skillId?: challengeCreateskillIdInput | string[]
    submissionLink: string
    contactEmail: string
    createdAt?: Date | string
  }

  export type challengeUpdateWithoutCategoryInput = {
    challengeTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    moneyPrize?: StringFieldUpdateOperationsInput | string
    seniority?: challengeUpdateseniorityInput | string[]
    submissionLink?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: skillUpdateOneRequiredWithoutChallengesNestedInput
  }

  export type challengeUncheckedUpdateWithoutCategoryInput = {
    challengeTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    moneyPrize?: StringFieldUpdateOperationsInput | string
    seniority?: challengeUpdateseniorityInput | string[]
    skillId?: challengeUpdateskillIdInput | string[]
    submissionLink?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challengeUncheckedUpdateManyWithoutCategoryInput = {
    challengeTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    moneyPrize?: StringFieldUpdateOperationsInput | string
    seniority?: challengeUpdateseniorityInput | string[]
    skillId?: challengeUpdateskillIdInput | string[]
    submissionLink?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challengeCreateManySkillsInput = {
    id?: string
    challengeTitle: string
    description: string
    projectBrief: string
    startDate: Date | string
    deadline: Date | string
    moneyPrize: string
    seniority?: challengeCreateseniorityInput | string[]
    categoryId: string
    submissionLink: string
    contactEmail: string
    createdAt?: Date | string
  }

  export type challengeUpdateWithoutSkillsInput = {
    challengeTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    moneyPrize?: StringFieldUpdateOperationsInput | string
    seniority?: challengeUpdateseniorityInput | string[]
    submissionLink?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: challengeCategoryUpdateOneRequiredWithoutChallengesNestedInput
  }

  export type challengeUncheckedUpdateWithoutSkillsInput = {
    challengeTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    moneyPrize?: StringFieldUpdateOperationsInput | string
    seniority?: challengeUpdateseniorityInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    submissionLink?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challengeUncheckedUpdateManyWithoutSkillsInput = {
    challengeTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    moneyPrize?: StringFieldUpdateOperationsInput | string
    seniority?: challengeUpdateseniorityInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    submissionLink?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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