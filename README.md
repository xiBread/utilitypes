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

- [`json`](/docs/general/json.md)
- [`literal`](/docs/general/literal.md)
- [`primitive`](/docs/general/primitive.md)
- [`Cast<T, U>`](/docs/general/Cast.md)
- [`Display<T>`](/docs/general/Display.md)
- [`Nominal<T, S>`](/docs/general/Nominal.md)

</details>

<details>
<summary>Array (24)</summary>

- [`Chunk<T, N>`](/docs/array/Chunk.md)
- [`Fill<T, U, A, B>`](/docs/array/Fill.md)
- [`Flat<T, N>`](/docs/array/Flat.md)
- [`Join<T, S>`](/docs/array/Join.md)
- [`Slice<T, A, B>`](/docs/array/Slice.md)
- [`Tuple<T, N>`](/docs/array/Tuple.md)
- [`Unique<T>`](/docs/array/Unique.md)
- [`At<T, N>`](/docs/array/At.md)
- [`Entries<T>`](/docs/array/Entries.md)
- [`Every<T, U>`](/docs/array/Every.md)
- [`Filter<T, U>`](/docs/array/Filter.md)
- [`Includes<T, U>`](/docs/array/Includes.md)
- [`IndexOf<T, U, N>`](/docs/array/IndexOf.md)
- [`Pop<T>`](/docs/array/Pop.md)
- [`Push<T, U>`](/docs/array/Push.md)
- [`Shift<T>`](/docs/array/Shift.md)
- [`Some<T, U>`](/docs/array/Some.md)
- [`Unshift<T, U>`](/docs/array/Unshift.md)
- [`Partition<T, U>`](/docs/array/Partition.md)
- [`Reject<T, U>`](/docs/array/Reject.md)
- [`Reverse<T>`](/docs/array/Reverse.md)
- [`TypedArray`](/docs/array/TypedArray.md)
- [`Head<T>`](/docs/array/Head.md)
- [`Tail<T>`](/docs/array/Tail.md)

</details>

<details>
<summary>Boolean (17)</summary>

- [`IsUnion<T>`](/docs/boolean/IsUnion.md)
- [`Extends<A, B>`](/docs/boolean/Extends.md)
- [`IsAny<T>`](/docs/boolean/IsAny.md)
- [`IsEqual<A, B>`](/docs/boolean/IsEqual.md)
- [`IsFalsy<T>`](/docs/boolean/IsFalsy.md)
- [`IsNever<T>`](/docs/boolean/IsNever.md)
- [`IsTruthy<T>`](/docs/boolean/IsTruthy.md)
- [`IsTuple<T>`](/docs/boolean/IsTuple.md)
- [`If<P, Q, R>`](/docs/boolean/If.md)
- [`Not<P>`](/docs/boolean/Not.md)
- [`Implies<P, Q>`](/docs/boolean/Implies.md)
- [`And<P, Q>`](/docs/boolean/And.md)
- [`Or<P, Q>`](/docs/boolean/Or.md)
- [`Xor<P, Q>`](/docs/boolean/Xor.md)
- [`Nand<P, Q>`](/docs/boolean/Nand.md)
- [`Nor<P, Q>`](/docs/boolean/Nor.md)
- [`Xnor<P, Q>`](/docs/boolean/Xnor.md)

</details>

<details>
<summary>Function (7)</summary>

- [`Curry<T>`](/docs/function/Curry.md)
- [`Action<T>`](/docs/function/Action.md)
- [`Awaitable<T>`](/docs/function/Awaitable.md)
- [`Fn<T, R>`](/docs/function/Fn.md)
- [`IsOverloaded<T>`](/docs/function/IsOverloaded.md)
- [`NoInfer<T>`](/docs/function/NoInfer.md)
- [`Predicate<T>`](/docs/function/Predicate.md)

</details>

<details>
<summary>Number (34)</summary>

- [`Range<A, B, O>`](/docs/number/Range.md)
- [`Max<N>`](/docs/number/Max.md)
- [`Min<N>`](/docs/number/Min.md)
- [`MinMax<N>`](/docs/number/MinMax.md)
- [`Bit`](/docs/number/Bit.md)
- [`Factorial<N>`](/docs/number/Factorial.md)
- [`IsPrime<N>`](/docs/number/IsPrime.md)
- [`IsFloat<N>`](/docs/number/IsFloat.md)
- [`IsInteger<N>`](/docs/number/IsInteger.md)
- [`Add<X, Y>`](/docs/number/Add.md)
- [`Absolute<N>`](/docs/number/Absolute.md)
- [`Ceil<N>`](/docs/number/Ceil.md)
- [`Compare<X, Y>`](/docs/number/Compare.md)
- [`Digit`](/docs/number/Digit.md)
- [`Divide<X, Y>`](/docs/number/Divide.md)
- [`DivMod<X, Y>`](/docs/number/DivMod.md)
- [`Eq<X, Y>`](/docs/number/Eq.md)
- [`Floor<N>`](/docs/number/Floor.md)
- [`Gt<X, Y>`](/docs/number/Gt.md)
- [`Gte<X, Y>`](/docs/number/Gte.md)
- [`IsEven<N>`](/docs/number/IsEven.md)
- [`IsNegative<N>`](/docs/number/IsNegative.md)
- [`IsOdd<N>`](/docs/number/IsOdd.md)
- [`IsPositive<N>`](/docs/number/IsPositive.md)
- [`Lt<X, Y>`](/docs/number/Lt.md)
- [`Lte<X, Y>`](/docs/number/Lte.md)
- [`Modulo<X, Y>`](/docs/number/Modulo.md)
- [`Multiply<X, Y>`](/docs/number/Multiply.md)
- [`Negate<N>`](/docs/number/Negate.md)
- [`Pow<B, N>`](/docs/number/Pow.md)
- [`Sign<N>`](/docs/number/Sign.md)
- [`Subtract<X, Y>`](/docs/number/Subtract.md)
- [`ToDigits<N>`](/docs/number/ToDigits.md)
- [`ParseInt<S, B>`](/docs/number/ParseInt.md)

</details>

<details>
<summary>Object (19)</summary>

- [`PathMode`](/docs/object/PathMode.md)
- [`Path<T, M>`](/docs/object/Path.md)
- [`Entries<T>`](/docs/object/Entries.md)
- [`ReadonlyDeep<T>`](/docs/object/ReadonlyDeep.md)
- [`Assign<T, U>`](/docs/object/Assign.md)
- [`FromEntries<T>`](/docs/object/FromEntries.md)
- [`AbstractConstructor<T, U>`](/docs/object/AbstractConstructor.md)
- [`Constructor<T, U>`](/docs/object/Constructor.md)
- [`Dict<T>`](/docs/object/Dict.md)
- [`EitherAll<T>`](/docs/object/EitherAll.md)
- [`ExclusiveOr<T, U>`](/docs/object/ExclusiveOr.md)
- [`Get<T, P>`](/docs/object/Get.md)
- [`InclusiveOr<T, K>`](/docs/object/InclusiveOr.md)
- [`Invert<T>`](/docs/object/Invert.md)
- [`Mutable<T>`](/docs/object/Mutable.md)
- [`OmitIndexSignature<T>`](/docs/object/OmitIndexSignature.md)
- [`OmitStrict<T, K>`](/docs/object/OmitStrict.md)
- [`ToPrimitive<T>`](/docs/object/ToPrimitive.md)
- [`ToUnion<T>`](/docs/object/ToUnion.md)

</details>

<details>
<summary>String (21)</summary>

- [`Length<S>`](/docs/string/Length.md)
- [`Split<S, U, N>`](/docs/string/Split.md)
- [`At<T, N>`](/docs/string/At.md)
- [`EndsWith<S, T, N>`](/docs/string/EndsWith.md)
- [`PadEnd<S, N, P>`](/docs/string/PadEnd.md)
- [`PadStart<S, N, P>`](/docs/string/PadStart.md)
- [`Repeat<S, N>`](/docs/string/Repeat.md)
- [`Replace<S, T, U>`](/docs/string/Replace.md)
- [`ReplaceAll<S, T, U>`](/docs/string/ReplaceAll.md)
- [`Slice<S, A, B>`](/docs/string/Slice.md)
- [`StartsWith<S, T, N>`](/docs/string/StartsWith.md)
- [`Trim<S, T>`](/docs/string/Trim.md)
- [`TrimEnd<S, T>`](/docs/string/TrimEnd.md)
- [`TrimStart<S, T>`](/docs/string/TrimStart.md)
- [`LowercaseChar`](/docs/string/LowercaseChar.md)
- [`UppercaseChar`](/docs/string/UppercaseChar.md)
- [`Whitespace`](/docs/string/Whitespace.md)
- [`Reverse<S>`](/docs/string/Reverse.md)
- [`Truncate<S, N>`](/docs/string/Truncate.md)
- [`CaseType`](/docs/string/CaseType.md)
- [`ChangeCase<S, T>`](/docs/string/ChangeCase.md)

</details>

<details>
<summary>Union (10)</summary>

- [`Difference<T, U>`](/docs/union/Difference.md)
- [`Disjunctive<T, U>`](/docs/union/Disjunctive.md)
- [`ExcludeStrict<T, U>`](/docs/union/ExcludeStrict.md)
- [`ExtractStrict<T, U>`](/docs/union/ExtractStrict.md)
- [`Last<T>`](/docs/union/Last.md)
- [`Literal<T>`](/docs/union/Literal.md)
- [`ToIntersection<T>`](/docs/union/ToIntersection.md)
- [`ToTuple<T>`](/docs/union/ToTuple.md)
- [`Distribute<T>`](/docs/union/Distribute.md)
- [`Permutate<T>`](/docs/union/Permutate.md)

</details>
