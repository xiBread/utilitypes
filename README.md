# UtiliTypes

A library with over 100 utility types to empower TypeScript development.

## Installation

> *Requires TypeScript >= 5.0*

```sh
npm i -D utilitypes
```

## Types

<details>
<summary>General (6)</summary>

- [`Cast<T, U>`](/docs/general/Cast.md)
- [`Display<T>`](/docs/general/Display.md)
- [`Nominal<T, S>`](/docs/general/Nominal.md)
- [`json`](/docs/general/json.md)
- [`literal`](/docs/general/literal.md)
- [`primitive`](/docs/general/primitive.md)

</details>

<details>
<summary>Array (25)</summary>

- [`ArrayType<T>`](/docs/array/ArrayType.md)
- [`At<T, N>`](/docs/array/At.md)
- [`Chunk<T, N>`](/docs/array/Chunk.md)
- [`Entries<T>`](/docs/array/Entries.md)
- [`Every<T, U>`](/docs/array/Every.md)
- [`Fill<T, U, A, B>`](/docs/array/Fill.md)
- [`Filter<T, U>`](/docs/array/Filter.md)
- [`Flat<T, N>`](/docs/array/Flat.md)
- [`Head<T>`](/docs/array/Head.md)
- [`Includes<T, U>`](/docs/array/Includes.md)
- [`IndexOf<T, U, N>`](/docs/array/IndexOf.md)
- [`Join<T, S>`](/docs/array/Join.md)
- [`Partition<T, U>`](/docs/array/Partition.md)
- [`Pop<T>`](/docs/array/Pop.md)
- [`Push<T, U>`](/docs/array/Push.md)
- [`Reject<T, U>`](/docs/array/Reject.md)
- [`Reverse<T>`](/docs/array/Reverse.md)
- [`Shift<T>`](/docs/array/Shift.md)
- [`Slice<T, A, B>`](/docs/array/Slice.md)
- [`Some<T, U>`](/docs/array/Some.md)
- [`Tail<T>`](/docs/array/Tail.md)
- [`Tuple<T, N>`](/docs/array/Tuple.md)
- [`TypedArray`](/docs/array/TypedArray.md)
- [`Unique<T>`](/docs/array/Unique.md)
- [`Unshift<T, U>`](/docs/array/Unshift.md)

</details>

<details>
<summary>Boolean (17)</summary>

- [`And<P, Q>`](/docs/boolean/And.md)
- [`Extends<A, B>`](/docs/boolean/Extends.md)
- [`If<P, Q, R>`](/docs/boolean/If.md)
- [`Implies<P, Q>`](/docs/boolean/Implies.md)
- [`IsAny<T>`](/docs/boolean/IsAny.md)
- [`IsEqual<A, B>`](/docs/boolean/IsEqual.md)
- [`IsFalsy<T>`](/docs/boolean/IsFalsy.md)
- [`IsNever<T>`](/docs/boolean/IsNever.md)
- [`IsTruthy<T>`](/docs/boolean/IsTruthy.md)
- [`IsTuple<T>`](/docs/boolean/IsTuple.md)
- [`IsUnion<T>`](/docs/boolean/IsUnion.md)
- [`Nand<P, Q>`](/docs/boolean/Nand.md)
- [`Nor<P, Q>`](/docs/boolean/Nor.md)
- [`Not<P>`](/docs/boolean/Not.md)
- [`Or<P, Q>`](/docs/boolean/Or.md)
- [`Xnor<P, Q>`](/docs/boolean/Xnor.md)
- [`Xor<P, Q>`](/docs/boolean/Xor.md)

</details>

<details>
<summary>Function (7)</summary>

- [`Action<T>`](/docs/function/Action.md)
- [`Awaitable<T>`](/docs/function/Awaitable.md)
- [`Curry<T>`](/docs/function/Curry.md)
- [`Fn<T, R>`](/docs/function/Fn.md)
- [`IsOverloaded<T>`](/docs/function/IsOverloaded.md)
- [`NoInfer<T>`](/docs/function/NoInfer.md)
- [`Predicate<T>`](/docs/function/Predicate.md)

</details>

<details>
<summary>Number (34)</summary>

- [`Absolute<N>`](/docs/number/Absolute.md)
- [`Add<X, Y>`](/docs/number/Add.md)
- [`Bit`](/docs/number/Bit.md)
- [`Ceil<N>`](/docs/number/Ceil.md)
- [`Compare<X, Y>`](/docs/number/Compare.md)
- [`Digit`](/docs/number/Digit.md)
- [`DivMod<X, Y>`](/docs/number/DivMod.md)
- [`Divide<X, Y>`](/docs/number/Divide.md)
- [`Eq<X, Y>`](/docs/number/Eq.md)
- [`Factorial<N>`](/docs/number/Factorial.md)
- [`Floor<N>`](/docs/number/Floor.md)
- [`Gt<X, Y>`](/docs/number/Gt.md)
- [`Gte<X, Y>`](/docs/number/Gte.md)
- [`IsEven<N>`](/docs/number/IsEven.md)
- [`IsFloat<N>`](/docs/number/IsFloat.md)
- [`IsInteger<N>`](/docs/number/IsInteger.md)
- [`IsNegative<N>`](/docs/number/IsNegative.md)
- [`IsOdd<N>`](/docs/number/IsOdd.md)
- [`IsPositive<N>`](/docs/number/IsPositive.md)
- [`IsPrime<N>`](/docs/number/IsPrime.md)
- [`Lt<X, Y>`](/docs/number/Lt.md)
- [`Lte<X, Y>`](/docs/number/Lte.md)
- [`Max<N>`](/docs/number/Max.md)
- [`Min<N>`](/docs/number/Min.md)
- [`MinMax<N>`](/docs/number/MinMax.md)
- [`Modulo<X, Y>`](/docs/number/Modulo.md)
- [`Multiply<X, Y>`](/docs/number/Multiply.md)
- [`Negate<N>`](/docs/number/Negate.md)
- [`ParseInt<S, B>`](/docs/number/ParseInt.md)
- [`Pow<B, N>`](/docs/number/Pow.md)
- [`Range<A, B, O>`](/docs/number/Range.md)
- [`Sign<N>`](/docs/number/Sign.md)
- [`Subtract<X, Y>`](/docs/number/Subtract.md)
- [`ToDigits<N>`](/docs/number/ToDigits.md)

</details>

<details>
<summary>Object (20)</summary>

- [`AbstractConstructor<T, U>`](/docs/object/AbstractConstructor.md)
- [`Assign<T, U>`](/docs/object/Assign.md)
- [`Constructor<T, U>`](/docs/object/Constructor.md)
- [`Dict<T>`](/docs/object/Dict.md)
- [`EitherAll<T>`](/docs/object/EitherAll.md)
- [`Entries<T>`](/docs/object/Entries.md)
- [`ExclusiveOr<T, U>`](/docs/object/ExclusiveOr.md)
- [`FromEntries<T>`](/docs/object/FromEntries.md)
- [`Get<T, P>`](/docs/object/Get.md)
- [`InclusiveOr<T, K>`](/docs/object/InclusiveOr.md)
- [`Invert<T>`](/docs/object/Invert.md)
- [`Mutable<T>`](/docs/object/Mutable.md)
- [`OmitIndexSignature<T>`](/docs/object/OmitIndexSignature.md)
- [`OmitStrict<T, K>`](/docs/object/OmitStrict.md)
- [`Path<T, M>`](/docs/object/Path.md)
- [`PathMode`](/docs/object/PathMode.md)
- [`ReadonlyDeep<T>`](/docs/object/ReadonlyDeep.md)
- [`ToPrimitive<T>`](/docs/object/ToPrimitive.md)
- [`ToString<T>`](/docs/object/ToString.md)
- [`ToUnion<T>`](/docs/object/ToUnion.md)

</details>

<details>
<summary>String (22)</summary>

- [`At<T, N>`](/docs/string/At.md)
- [`CaseType`](/docs/string/CaseType.md)
- [`ChangeCase<S, T>`](/docs/string/ChangeCase.md)
- [`EndsWith<S, T, N>`](/docs/string/EndsWith.md)
- [`IndexOf<S, N>`](/docs/string/IndexOf.md)
- [`Length<S>`](/docs/string/Length.md)
- [`LowercaseChar`](/docs/string/LowercaseChar.md)
- [`PadEnd<S, N, P>`](/docs/string/PadEnd.md)
- [`PadStart<S, N, P>`](/docs/string/PadStart.md)
- [`Repeat<S, N>`](/docs/string/Repeat.md)
- [`Replace<S, T, U>`](/docs/string/Replace.md)
- [`ReplaceAll<S, T, U>`](/docs/string/ReplaceAll.md)
- [`Reverse<S>`](/docs/string/Reverse.md)
- [`Slice<S, A, B>`](/docs/string/Slice.md)
- [`Split<S, U, N>`](/docs/string/Split.md)
- [`StartsWith<S, T, N>`](/docs/string/StartsWith.md)
- [`Trim<S, T>`](/docs/string/Trim.md)
- [`TrimEnd<S, T>`](/docs/string/TrimEnd.md)
- [`TrimStart<S, T>`](/docs/string/TrimStart.md)
- [`Truncate<S, N>`](/docs/string/Truncate.md)
- [`UppercaseChar`](/docs/string/UppercaseChar.md)
- [`Whitespace`](/docs/string/Whitespace.md)

</details>

<details>
<summary>Union (10)</summary>

- [`Difference<T, U>`](/docs/union/Difference.md)
- [`Disjunctive<T, U>`](/docs/union/Disjunctive.md)
- [`Distribute<T>`](/docs/union/Distribute.md)
- [`ExcludeStrict<T, U>`](/docs/union/ExcludeStrict.md)
- [`ExtractStrict<T, U>`](/docs/union/ExtractStrict.md)
- [`Last<T>`](/docs/union/Last.md)
- [`Literal<T>`](/docs/union/Literal.md)
- [`Permutate<T>`](/docs/union/Permutate.md)
- [`ToIntersection<T>`](/docs/union/ToIntersection.md)
- [`ToTuple<T>`](/docs/union/ToTuple.md)

</details>
