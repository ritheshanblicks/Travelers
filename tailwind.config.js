/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "all",
  // content: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      barlow: "var(--ff-barlow)",
      roboto: "var(--ff-roboto)",
      icon: "var(--ff-icon)",
    },
    fontWeight: {
      normal: "var(--fw-n)",
      bold: "var(--fw-b)",
      "extra-bold": "var(--fw-eb)",
    },
    fontSize: {
      10: "0.62rem",
      12: "0.75rem",
      14: "0.87rem",
      16: "1rem",
      18: "1.12rem",
      24: "1.5rem",
      28: "1.75rem",
      32: "2rem",
      36: "2.25rem",
      40: "2.5rem",
    },
    borderRadius: {
      none: "0",
      2: "2px",
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      full: "9999px",
    },
    letterSpacing: {
      normal: "0",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",

      pc: {
        1: "var(--pc-1)",
      },

      sc: {
        1: "var(--sc-1)",
      },

      tc: {
        1: "var(--tc-1)",
        2: "var(--tc-2)",
        3: "var(--tc-3)",
        4: "var(--tc-4)",
      },
      "tint-pc-1": {
        1: "var(--tint-pc-1-1)",
        2: "var(--tint-pc-1-2)",
        3: "var(--tint-pc-1-3)",
        "1-rgba": "var(--tint-pc-1-1-rgba)",
        "2-rgba": "var(--tint-pc-1-2-rgba)",
        "3-rgba": "var(--tint-pc-1-3-rgba)",
      },

      "tint-sc-1": {
        1: "var(--tint-sc-1-1)",
        2: "var(--tint-sc-1-2)",
        3: "var(--tint-sc-1-3)",
        "1-rgba": "var(--tint-sc-1-1-rgba)",
        "2-rgba": "var(--tint-sc-1-2-rgba)",
        "3-rgba": "var(--tint-sc-1-3-rgba)",
      },
      "tint-tc-1": {
        1: "var(--tint-tc-1-1)",
        2: "var(--tint-tc-1-2)",
        3: "var(--tint-tc-1-3)",
        "1-rgba": "var(--tint-tc-1-1-rgba)",
        "2-rgba": "var(--tint-tc-1-2-rgba)",
        "3-rgba": "var(--tint-tc-1-3-rgba)",
      },

      "tint-tc-2": {
        1: "var(--tint-tc-2-1)",
        2: "var(--tint-tc-2-2)",
        3: "var(--tint-tc-2-3)",
        "1-rgba": "var(--tint-tc-2-1-rgba)",
        "2-rgba": "var(--tint-tc-2-2-rgba)",
        "3-rgba": "var(--tint-tc-2-3-rgba)",
      },

      "tint-tc-3": {
        1: "var(--tint-tc-3-1)",
        2: "var(--tint-tc-3-2)",
        3: "var(--tint-tc-3-3)",
        "1-rgba": "var(--tint-tc-3-1-rgba)",
        "2-rgba": "var(--tint-tc-3-2-rgba)",
        "3-rgba": "var(--tint-tc-3-3-rgba)",
      },

      "tint-tc-4": {
        1: "var(--tint-tc-4-1)",
        2: "var(--tint-tc-4-2)",
        3: "var(--tint-tc-4-3)",
        "1-rgba": "var(--tint-tc-4-1-rgba)",
        "2-rgba": "var(--tint-tc-4-2-rgba)",
        "3-rgba": "var(--tint-tc-4-3-rgba)",
      },

      nc: {
        1: "var(--nc-1)",
        2: "var(--nc-2)",
        3: "var(--nc-3)",
        4: "var(--nc-4)",
        5: "var(--nc-5)",
        6: "var(--nc-6)",
        7: "var(--nc-7)",
      },
    },
    extend: {},
    spacing: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      28: "28px",
      32: "32px",
      40: "40px",
      48: "48px",
      52: "52px",
      56: "56px",
      60: "60px",
      64: "64px",
      80: "80px",
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
    },
  },
  plugins: [],
};
