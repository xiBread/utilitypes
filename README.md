# Extended Utility Types

A library with over 100 utility types to empower TypeScript development.

## Install

```sh
npm i -D extended-utility-types
# Requires TypeScript >= 4.1
```

## Types

<div align="center">

[![Aliases]](src/aliases)
[![Array]](src/array)
[![Common]](src/common)
[![Function]](src/function)
[![Logical]](src/logical)
[![Number]](src/number)
[![Object]](src/object)
[![String]](src/string)
[![Union]](src/union)

</div>

- Aliases
	- [`LiteralPrimitive`](src/aliases/LiteralPrimitive.ts)
	- [`LowercaseCharacter`](src/aliases/LowercaseCharacter.ts)
	- [`Maybe<T>`](src/aliases/Maybe.ts)
	- [`nil`](src/aliases/Nil.ts)
	- [`Nillable<T>`](src/aliases/Nillable.ts)
	- [`Nullable<T>`](src/aliases/Nullable.ts)
	- [`NumberLike`](src/aliases/NumberLike.ts)
	- [`Primitive`](src/aliases/Primitive.ts)
	- [`UppercaseCharacter`](src/aliases/UppercaseCharacter.ts)
	- [`Whitespace`](src/aliases/Whitespace.ts)
- Array
	- [`Chunk<T, N>`](src/array/Chunk.ts)
	- [`Filter<T, U>`](src/array/Filter.ts)
	- [`Flat<T, N>`](src/array/Flat.ts)
	- [`Includes<T, U>`](src/array/Includes.ts)
	- [`IndexOf<T, U, N>`](src/array/IndexOf.ts)
	- [`Initial<T>`](src/array/Initial.ts)
	- [`Join<T, S>`](src/array/Join.ts)
	- [`Pop<T>`](src/array/Pop.ts)
	- [`Push<T, U>`](src/array/Push.ts)
	- [`Reverse<T>`](src/array/Reverse.ts)
	- [`Shift<T>`](src/array/Shift.ts)
	- [`Slice<T, X, Y>`](src/array/Slice.ts)
	- [`Tail<T>`](src/array/Tail.ts)
	- [`Tuple<T, N>`](src/array/Tuple.ts)
	- [`TupleOf<T>`](src/array/TupleOf.ts)
	- [`Unshift<T, U>`](src/array/Unshift.ts)
	- [`Unzip<T>`](src/array/Unzip.ts)
	- [`Zip<T>`](src/array/Zip.ts)
- Common
	- [`CastAs<T, U>`](src/common/CastAs.ts)
	- [`IsEqual<X, Y>`](src/common/IsEqual.ts)
	- [`IsAny<T>`](src/common/IsAny.ts)
	- [`IsNever<T>`](src/common/IsNever.ts)
	- [`IsTuple<T>`](src/common/IsTuple.ts)
	- [`Opaque<T, U>`](src/common/Opaque.ts)
- Function
	- [`AppendParameter<T, U>`](src/function/AppendParameter.ts)
	- [`FunctionLike<T>`](src/function/FunctionLike.ts)
	- [`Promisable<T>`](src/function/Promisable.ts)
	- [`PromiseReturnType<T>`](src/function/PromiseReturnType.ts)
- Logical
	- [`And<X, Y>`](src/logical/And.ts)
	- [`If<T, X, Y>`](src/logical/If.ts)
	- [`Nand<X, Y>`](src/logical/Nand.ts)
	- [`Nor<X, Y>`](src/logical/Nor.ts)
	- [`Not<T>`](src/logical/Not.ts)
	- [`Or<X, Y>`](src/logical/Or.ts)
	- [`Xnor<X, Y>`](src/logical/Xnor.ts)
	- [`Xor<X, Y>`](src/logical/Xor.ts)
- Number
	- [`Absolute<N>`](src/number/Absolute.ts)
	- [`Add<X, Y>`](src/number/Add.ts)
	- [`BitAnd<X, Y>`](src/number/BitAnd.ts)
	- [`BitLeftShift<N>`](src/number/BitLeftShift.ts)
	- [`BitNot<N>`](src/number/BitNot.ts)
	- [`BitOr<X, Y>`](src/number/BitOr.ts)
	- [`BitRightShift<N>`](src/number/BitRightShift.ts)
	- [`BitXor<X, Y>`](src/number/BitXor.ts)
	- [`Compare<X, Y>`](src/number/Compare.ts)
	- [`GreaterThan<X, Y>`](src/number/GreaterThan.ts)
	- [`IsNegative<N>`](src/number/IsNegative.ts)
	- [`LessThan<X, Y>`](src/number/LessThan.ts)
	- [`Multiply<X, Y>`](src/number/Multiply.ts)
	- [`ParseInt<S>`](src/number/ParseInt.ts)
	- [`Range<X, Y>`](src/number/Range.ts)
	- [`Sign<N>`](src/number/Sign.ts)
	- [`Subtract<X, Y>`](src/number/Subtract.ts)
	- [`Sum<X, Y>`](src/number/Sum.ts)
- Object
	- [`Assign<T, U>`](src/object/Assign.ts)
	- [`Compact<T>`](src/object/Compact.ts)
	- [`DeepPartial<T>`](src/object/DeepPartial.ts)
	- [`DeepReadonly<T>`](src/object/DeepReadonly.ts)
	- [`Entries<T>`](src/object/Entries.ts)
	- [`EnumOf<T, U>`](src/object/EnumOf.ts)
	- [`ExclusiveOr<T, U>`](src/object/ExclusiveOr.ts)
	- [`Expand<T>`](src/object/Expand.ts)
	- [`ExtractReadonly<T>`](src/object/ExtractReadonly.ts)
	- [`ExtractRequired<T>`](src/object/ExtractRequired.ts)
	- [`InclusiveOr<T, K>`](src/object/InclusiveOr.ts)
	- [`IntersectionOf<T>`](src/object/IntersectionOf.ts)
	- [`Invert<T>`](src/object/Invert.ts)
	- [`KeyBy<T, U>`](src/object/KeyBy.ts)
	- [`Lookup<T, K>`](src/object/Lookup.ts)
	- [`Mutable<T>`](src/object/Mutable.ts)
	- [`NoneOrAll<T>`](src/object/NoneOrAll.ts)
	- [`OmitAllBy<T, U>`](src/object/OmitAllBy.ts)
	- [`OmitBy<T, U, K>`](src/object/OmitBy.ts)
	- [`OmitDeep<T, K>`](src/object/OmitDeep.ts)
	- [`OmitStrict<T, K>`](src/object/OmitStrict.ts)
	- [`PickAllBy<T, U>`](src/object/PickAllBy.ts)
	- [`PickBy<T, U, K>`](src/object/PickBy.ts)
	- [`PickDeep<T, K>`](src/object/PickDeep.ts)
	- [`PickRequired<T, K>`](src/object/PickRequired.ts)
	- [`RecordOf<T>`](src/object/RecordOf.ts)
- String
	- [`CamelCase<S>`](src/string/CamelCase.ts)
	- [`ConstantCase<S>`](src/string/ConstantCase.ts)
	- [`Delimit<S, U>`](src/string/Delimit.ts)
	- [`Get<T, P>`](src/string/Get.ts)
	- [`Length<S>`](src/string/Length.ts)
	- [`PadEnd<S, N, T>`](src/string/PadEnd.ts)
	- [`PadStart<S, N, T>`](src/string/PadStart.ts)
	- [`PascalCase<S>`](src/string/PascalCase.ts)
	- [`Path<T>`](src/string/Path.ts)
	- [`PathParameters<S>`](src/string/PathParameters.ts)
	- [`Printf<S>`](src/string/Printf.ts)
	- [`Repeat<S, N>`](src/string/Repeat.ts)
	- [`Replace<S, T, U>`](src/string/Replace.ts)
	- [`ReplaceAll<S, T, U>`](src/string/ReplaceAll.ts)
	- [`SliceString<S, X, Y>`](src/string/SliceString.ts)
	- [`Split<S, U>`](src/string/Split.ts)
	- [`SplitWith<S, U>`](src/string/SplitWith.ts)
	- [`StrictPath<T>`](src/string/StrictPath.ts)
	- [`Trim<S>`](src/string/Trim.ts)
	- [`TrimEnd<S>`](src/string/TrimEnd.ts)
	- [`TrimStart<S>`](src/string/TrimStart.ts)
- Union
	- [`ExcludeStrict<T, U>`](src/union/ExcludeStrict.ts)
	- [`ExtractStrict<T, U>`](src/union/ExtractStrict.ts)
	- [`IsUnion<T>`](src/union/IsUnion.ts)
	- [`LastType<T>`](src/union/LastType.ts)
	- [`LiteralUnion<T, U>`](src/union/LiteralUnion.ts)
	- [`Permutate<T>`](src/union/Permutate.ts)
	- [`SymmetricDifference<T, U>`](src/union/SymmetricDifference.ts)
	- [`UnionOf<T>`](src/union/UnionOf.ts)
	- [`Distribute<T>`](src/union/Distribute.ts)

[Aliases]: https://img.shields.io/badge/10-Aliases-FF9C9F?style=for-the-badge&labelColor=363C44
[Array]: https://img.shields.io/badge/18-Array-FEC98F?style=for-the-badge&labelColor=363C44
[Common]: https://img.shields.io/badge/6-Common-FEDD9E?style=for-the-badge&labelColor=363C44
[Function]: https://img.shields.io/badge/4-Function-B9E9AA?style=for-the-badge&labelColor=363C44
[Logical]: https://img.shields.io/badge/8-Logical-B9F9E6?style=for-the-badge&labelColor=363C44
[Number]: https://img.shields.io/badge/18-Number-B1F1F4?style=for-the-badge&labelColor=363C44
[Object]: https://img.shields.io/badge/26-Object-88C5FF?style=for-the-badge&labelColor=363C44
[String]: https://img.shields.io/badge/21-String-C7B4E0?style=for-the-badge&labelColor=363C44
[Union]: https://img.shields.io/badge/9-Union-F8CEEE?style=for-the-badge&labelColor=363C44
