# Extended Utility Types

Yet another utility type library.

## Table of Contents

- [Aliases](###Aliases)
  - `LiteralPrimitive`
  - `LowercaseCharacter`
  - `Maybe<T>`
  - `Nil`
  - `Nillable<T>`
  - `Nullable<T>`
  - `Primitive`
  - `UppercaseCharacter`
  - `Whitespace`
- [Array](###Array)
  - `Deconstruct<T>`
  - `Entries<T>`
  - `Filter<T, U>`
  - `FixedTuple<T, N>`
  - `Flat<T, N>`
  - `Head<T>`
  - `Includes<T, U>`
  - `Initial<T>`
  - `Join<T, S>`
  - `Last<T>`
  - `Push<T, U>`
  - `Reverse<T>`
  - `Shift<T>`
  - `Slice<T, X, Y>`
  - `Tail<T>`
  - `TupleOf<T>`
  - `Unshift<T, U>`
  - `Unzip<T>`
  - `Zip<T>`
- [Common](###Common)
  - `CastAs<T, U>`
  - `ExcludeStrict<T, U>`
  - `ExtractStrict<T, U>`
  - `OmitAllBy<T, U>`
  - `OmitBy<T, U, K>`
  - `OmitStrict<T, K>`
  - `Opaque<T, U>`
  - `PickAllBy<T, U>`
  - `PickBy<T, U, K>`
- [Function](###Function)
  - `Promisable<T>`
  - `PromiseReturnType<T>`
- [Number](###Number)
  - `Absolute<N>`
  - `Add<X, Y>`
  - `BitAnd<X, Y>`
  - `BitLeftShift<N>`
  - `BitNot<N>`
  - `BitOr<X, Y>`
  - `BitRightShift<N>`
  - `BitXor<X, Y>`
  - `GreaterThan<X, Y>`
  - `LessThan<X, Y>`
  - `Range<X, Y>`
  - `Subtract<X, Y>`
- [Object](###Object)
  - `Assign<T, U>`
  - `Compact<T>`
  - `DeepPartial<T>`
  - `DeepReadonly<T>`
  - `ExclusiveOr<T, U>`
  - `Expand<T>`
  - `InclusiveOr<T, U>`
  - `IntersectionOf<T>`
  - `Mutable<T>`
  - `NoneOrAll<T>`
  - `RecordOf<T>`
- [String](###String)
  - `CamelCase<S>`
  - `ConstantCase<S>`
  - `Delimit<S, U>`
  - `Length<S>`
  - `PadEnd<S, N, T>`
  - `PadStart<S, N, T>`
  - `PascalCase<S>`
  - `Path<T>`
  - `Printf<S>`
  - `QueryParameters<T>`
  - `Repeat<S, N>`
  - `Replace<S, T, U>`
  - `ReplaceAll<S, T, U>`
  - `SliceString<S, X, Y>`
  - `Split<S, U>`
  - `SplitWith<S, U>`
  - `StrictPath<T>`
  - `Trim<S>`
  - `TrimEnd<S>`
  - `TrimStart<S>`
  - `Value<T, P>`
- [Union](###Union)
  - `LastType<T>`
  - `LiteralUnion<T>`
  - `SymmetricDifference<T, U>`

### Aliases

#### `LiteralPrimitive`

#### `LowercaseCharacter`

#### `Maybe<Type>`

#### `Nil`

#### `Nillable<Type>`

#### `Nullable<Type>`

#### `Primitive`

#### `UppercaseCharacter`

#### `Whitespace`

### Array

#### `Deconstruct<Array>`

#### `Entries<Array>`

#### `Filter<Array, Type>`

#### `FixedTuple<Array, Length>`

### `Flat<Array, Depth>`

#### `Head<Array>`

### `Includes<Array, Type>`

#### `Initial<Array>`

#### `Join<Array, Separator>`

#### `Last<Array>`

#### `Push<Array, Type>`

#### `Reverse<Array>`

#### `Shift<Array>`

#### `Slice<Array, Start, End>`

#### `Tail<Array>`

#### `TupleOf<Type>`

#### `Unshift<Array, Type>`

#### `Unzip<Array>`

#### `Zip<Array>`

### Common

#### `CastAs<Type, Type>`

#### `ExcludeStrict<Type, ExcludedUnion>`

#### `ExtractStrict<Type, Union>`

#### `OmitAllBy<Type, Type>`

#### `OmitBy<Type, Type, Keys>`

#### `OmitStrict<Type, Keys>`

#### `Opaque<Type, Type>`

#### `PickAllBy<Type, Type>`

#### `PickBy<Type, Type, Keys>`

### Function

#### `Promisable<Type>`

#### `PromiseReturnType<Type>`

### Number

#### `Absolute<Number>`

#### `Add<Addend, Addend>`

#### `BitAnd<Operand, Operand>`

#### `BitLeftShift<Operand>`

#### `BitNot<Operand>`

#### `BitOr<Operand, Operand>`

#### `BitRightShift<Operand>`

#### `BitXor<Operand, Operand>`

#### `GreaterThan<Number, Number>`

#### `LessThan<Number, Number>`

#### `Range<Start, End>`

#### `Subtract<Minuend, Subtrahend>`

### Object

#### `Assign<Target, Sources>`

#### `Compact<Type>`

#### `DeepPartial<Type>`

#### `DeepReadonly<Type>`

#### `ExclusiveOr<Type, Type>`

#### `Expand<Type>`

#### `InclusiveOr<Type, Keys>`

#### `IntersectionOf<Union>`

#### `Mutable<Type>`

#### `NoneOrAll<Type>`

#### `RecordOf<Type>`

### String

#### `CamelCase<StringType>`

#### `ConstantCase<StringType>`

#### `Delimit<StringType, Separator>`

#### `Length<StringType>`

#### `PadEnd<StringType, TargetLength, PadString>`

#### `PadStart<StringType, TargetLength, PadString>`

#### `PascalCase<StringType>`

#### `Path<Type>`

#### `Printf<PrintfString>`

#### `QueryParameters<QueryString>`

#### `Repeat<StringType, Amount>`

#### `Replace<StringType, Substring, Replacement>`

#### `ReplaceAll<StringType, Substring, Replacement>`

#### `SliceString<StringType, Start, End>`

#### `Split<StringType, Separator>`

#### `SplitWith<StringType, Separator>`

#### `StrictPath<Type>`

#### `Trim<StringType>`

#### `TrimEnd<StringType>`

#### `TrimStart<StringType>`

#### `Value<Type, PathType>`

### Union

#### `LastType<Type>`

#### `LiteralUnion<Type>`

#### `SymmetricDifference<Type, Type>`
