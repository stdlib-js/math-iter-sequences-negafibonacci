<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# iterNegaFibonacciSeq

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which generates a [negaFibonacci sequence][fibonacci-number].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [negaFibonacci numbers][fibonacci-number] are the integer sequence

<!-- <equation class="equation" label="eq:negafibonacci_sequence" align="center" raw="0, 1, -1, 2, -3, 5, -8, 13, -21, 34, -55, 89, -144, \ldots" alt="NegaFibonacci sequence"> -->

```math
0, 1, -1, 2, -3, 5, -8, 13, -21, 34, -55, 89, -144, \ldots
```

<!-- <div class="equation" align="center" data-raw-text="0, 1, -1, 2, -3, 5, -8, 13, -21, 34, -55, 89, -144, \ldots" data-equation="eq:negafibonacci_sequence">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@aa77a2f6e76d2e9da5b49bffa45ee5167d6c16e1/lib/node_modules/@stdlib/math/iter/sequences/negafibonacci/docs/img/equation_negafibonacci_sequence.svg" alt="NegaFibonacci sequence">
    <br>
</div> -->

<!-- </equation> -->

The sequence is defined by the recurrence relation

<!-- <equation class="equation" label="eq:negafibonacci_recurrence_relation" align="center" raw="F_{n-2} = F_{n} - F_{n-1}" alt="NegaFibonacci sequence recurrence relation"> -->

```math
F_{n-2} = F_{n} - F_{n-1}
```

<!-- <div class="equation" align="center" data-raw-text="F_{n-2} = F_{n} - F_{n-1}" data-equation="eq:negafibonacci_recurrence_relation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@aa77a2f6e76d2e9da5b49bffa45ee5167d6c16e1/lib/node_modules/@stdlib/math/iter/sequences/negafibonacci/docs/img/equation_negafibonacci_recurrence_relation.svg" alt="NegaFibonacci sequence recurrence relation">
    <br>
</div> -->

<!-- </equation> -->

which yields

<!-- <equation class="equation" label="eq:negafibonacci_fibonacci" align="center" raw="F_{-n} = (-1)^{n+1} F_n" alt="NegaFibonacci relationship to Fibonacci numbers"> -->

```math
F_{-n} = (-1)^{n+1} F_n
```

<!-- <div class="equation" align="center" data-raw-text="F_{-n} = (-1)^{n+1} F_n" data-equation="eq:negafibonacci_fibonacci">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@aa77a2f6e76d2e9da5b49bffa45ee5167d6c16e1/lib/node_modules/@stdlib/math/iter/sequences/negafibonacci/docs/img/equation_negafibonacci_fibonacci.svg" alt="NegaFibonacci relationship to Fibonacci numbers">
    <br>
</div> -->

<!-- </equation> -->

with seed values `F_0 = 0` and `F_{-1} = 1`.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-iter-sequences-negafibonacci
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var iterNegaFibonacciSeq = require( '@stdlib/math-iter-sequences-negafibonacci' );
```

#### iterNegaFibonacciSeq( \[options] )

Returns an iterator which generates a [negaFibonacci sequence][fibonacci-number].

```javascript
var it = iterNegaFibonacciSeq();
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns 1

v = it.next().value;
// returns -1

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **iter**: number of iterations. Default: `79`.

The returned iterator can only generate the first `79` [negaFibonacci numbers][fibonacci-number], as larger [Fibonacci numbers][fibonacci-number] cannot be safely represented in [double-precision floating-point format][ieee754]. By default, the function returns an iterator which generates all `79` numbers. To limit the number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 2
};
var it = iterNegaFibonacciSeq( opts );
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns 1

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var iterNegaFibonacciSeq = require( '@stdlib/math-iter-sequences-negafibonacci' );

// Create an iterator:
var it = iterNegaFibonacciSeq();

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/negafibonacci`][@stdlib/math/base/special/negafibonacci]</span><span class="delimiter">: </span><span class="description">compute the nth negaFibonacci number.</span>
-   <span class="package-name">[`@stdlib/math-iter/sequences/fibonacci`][@stdlib/math/iter/sequences/fibonacci]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a Fibonacci sequence.</span>
-   <span class="package-name">[`@stdlib/math-iter/sequences/nonfibonacci`][@stdlib/math/iter/sequences/nonfibonacci]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a non-Fibonacci integer sequence.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-sequences-negafibonacci.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-sequences-negafibonacci

[test-image]: https://github.com/stdlib-js/math-iter-sequences-negafibonacci/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-iter-sequences-negafibonacci/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-sequences-negafibonacci/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-sequences-negafibonacci?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-sequences-negafibonacci.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-sequences-negafibonacci/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter-sequences-negafibonacci/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-iter-sequences-negafibonacci/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-iter-sequences-negafibonacci/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-iter-sequences-negafibonacci/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-iter-sequences-negafibonacci/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-iter-sequences-negafibonacci/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-iter-sequences-negafibonacci/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-sequences-negafibonacci/main/LICENSE

[fibonacci-number]: https://en.wikipedia.org/wiki/Fibonacci_number

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/negafibonacci]: https://github.com/stdlib-js/math-base-special-negafibonacci

[@stdlib/math/iter/sequences/fibonacci]: https://github.com/stdlib-js/math-iter-sequences-fibonacci

[@stdlib/math/iter/sequences/nonfibonacci]: https://github.com/stdlib-js/math-iter-sequences-nonfibonacci

<!-- </related-links> -->

</section>

<!-- /.links -->
