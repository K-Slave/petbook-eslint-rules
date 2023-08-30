"use strict";

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const RuleTester = require("eslint").RuleTester;
const rule = require("../../../lib/rules/classname-pascal-case");

const parserOptions = {
  ecmaVersion: 2020,
  sourceType: "module",
  ecmaFeatures: {
    jsx: true,
  },
};

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions });
ruleTester.run("classname-pascal-case", rule, {
  valid: [
    {
      code: "const testcomponent= 'a'",
    },
    {
      code: "const testComponent= 'a'",
    },
    {
      code: "const test_component= 'a'",
    },
    {
      code: "const TestComponent= 'a'",
    },
    {
      code: "const CSSTransitionGroup= 'a'",
    },
    {
      code: "const BetterThanCSS= 'a'",
    },
    {
      code: "const Test1Component= 'a'",
    },
    {
      code: "const TestComponent1= 'a'",
    },
    {
      code: "const T3StComp0Nent= 'a'",
    },
    {
      code: "const Éurströmming= 'a'",
    },
    {
      code: "const Año= 'a'",
    },
    {
      code: "const Søknad= 'a'",
    },
    {
      code: "const T= 'a'",
    },
    {
      code: "const YMCA= 'a'",
      options: [{ allowAllCaps: true }],
    },
    {
      code: "const TEST_COMPONENT= 'a'",
      options: [{ allowAllCaps: true }],
    },
    {
      code: "const IGNORED= 'a'",
      options: [{ ignore: ["IGNORED"] }],
    },
    {
      code: "const Foo_DEPRECATED= 'a'",
      options: [{ ignore: ["*_D*D"] }],
    },
    {
      code: "const Foo_DEPRECATED= 'a'",
      options: [{ ignore: ["*_+(DEPRECATED|IGNORED)"] }],
    },
    {
      code: "const $= 'a'",
    },
    {
      code: "const _= 'a'",
    },
    {
      code: "const _TEST_COMPONENT= 'a'",
      options: [{ allowAllCaps: true}],
    },
    {
      code: "const _TestComponent= 'a'"
    },
  ],

  invalid: [
    {
      code: "const Test_component= 'a'",
      errors: [
        {
          messageId: "usePascalCase",
          data: { name: "Test_component" },
        },
      ],
    },
    {
      code: "const TEST_COMPONENT= 'a'",
      errors: [
        {
          messageId: "usePascalCase",
          data: { name: "TEST_COMPONENT" },
        },
      ],
    },
    {
      code: "const YMCA= 'a'",
      errors: [
        {
          messageId: "usePascalCase",
          data: { name: "YMCA" },
        },
      ],
    },
    {
      code: "const _TEST_COMPONENT= 'a'",
      options: [{ allowAllCaps: true }],
      errors: [
        {
          messageId: "usePascalCase",
          data: { name: "_TEST_COMPONENT" },
        },
      ],
    },
    {
      code: "const TEST_COMPONENT_= 'a'",
      options: [{ allowAllCaps: true }],
      errors: [
        {
          messageId: "usePascalCase",
          data: { name: "TEST_COMPONENT_" },
        },
      ],
    },
    {
      code: "const __= 'a'",
      options: [{ allowAllCaps: true }],
      errors: [
        {
          messageId: "usePascalCase",
          data: { name: "__" },
        },
      ],
    },
    {
      code: "const _div= 'a'",
      errors: [
        {
          messageId: "usePascalCase",
          data: { name: "_div" },
        },
      ],
    },
    {
      code: "const __= 'a'",
      options: [{ allowAllCaps: true}],
      errors: [
        {
          messageId: "usePascalCase",
          data: { name: "__" },
        },
      ],
    },
    {
      code: "const $a= 'a'",
      errors: [
        {
          messageId: "usePascalCase",
          data: { name: "$a" },
        },
      ],
    },
    {
      code: "const Foo_DEPRECATED= 'a'",
      options: [{ ignore: ["*_FOO"] }],
      errors: [
        {
          messageId: "usePascalCase",
          data: { name: "Foo_DEPRECATED" },
        },
      ],
    },
  ],
});
