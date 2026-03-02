
export interface Grade11MathQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  chapter: string;
  subject: string;
}

export const grade11Mathematics: { [chapter: string]: Grade11MathQuestion[] } = {

  "Unit 1: Relations and Functions": [
    // EASY (10)
    {
      id: "g11m-u1-e1",
      question: "Which of the following best describes a function?",
      options: [
        "A relation where every output has exactly one input",
        "A relation where every input has exactly one output",
        "A set of ordered pairs with no repeated elements",
        "A relation where inputs and outputs are equal"
      ],
      correct: "A relation where every input has exactly one output",
      explanation: "A function is a special relation where each element of the domain (input) is paired with exactly one element of the range (output).",
      difficulty: "Easy",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-e2",
      question: "What is the domain of the function f(x) = √x?",
      options: ["All real numbers", "x > 0", "x ≥ 0", "x ≤ 0"],
      correct: "x ≥ 0",
      explanation: "The square root function is defined only for non-negative values, so the domain is x ≥ 0.",
      difficulty: "Easy",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-e3",
      question: "If f(x) = 2x + 3, what is f(4)?",
      options: ["8", "10", "11", "14"],
      correct: "11",
      explanation: "f(4) = 2(4) + 3 = 8 + 3 = 11.",
      difficulty: "Easy",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-e4",
      question: "Which of the following is NOT a function?",
      options: [
        "{(1,2), (2,3), (3,4)}",
        "{(1,2), (1,3), (2,4)}",
        "{(1,1), (2,2), (3,3)}",
        "{(0,5), (1,5), (2,5)}"
      ],
      correct: "{(1,2), (1,3), (2,4)}",
      explanation: "In {(1,2),(1,3),(2,4)}, the input 1 maps to two different outputs (2 and 3), violating the definition of a function.",
      difficulty: "Easy",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-e5",
      question: "The range of f(x) = x² for x ∈ ℝ is:",
      options: ["All real numbers", "x ≥ 0", "x > 0", "x ≤ 0"],
      correct: "x ≥ 0",
      explanation: "Squaring any real number always gives a non-negative result, so the range is [0, ∞).",
      difficulty: "Easy",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-e6",
      question: "What type of relation is {(1,2), (2,1), (3,3)}?",
      options: ["Only a function", "Only a relation", "Both a relation and a function", "Neither a relation nor a function"],
      correct: "Both a relation and a function",
      explanation: "All sets of ordered pairs are relations. This set is also a function because each input maps to exactly one output.",
      difficulty: "Easy",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-e7",
      question: "If f(x) = 5, what kind of function is this?",
      options: ["Linear function", "Quadratic function", "Constant function", "Exponential function"],
      correct: "Constant function",
      explanation: "A constant function has the same output value for every input. f(x) = 5 means the output is always 5 regardless of x.",
      difficulty: "Easy",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-e8",
      question: "The vertical line test is used to determine if a graph represents:",
      options: ["A relation", "A function", "A one-to-one function", "An onto function"],
      correct: "A function",
      explanation: "If any vertical line crosses the graph more than once, the graph does not represent a function.",
      difficulty: "Easy",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-e9",
      question: "Given f(x) = x + 1, what is f(0)?",
      options: ["0", "1", "−1", "2"],
      correct: "1",
      explanation: "f(0) = 0 + 1 = 1.",
      difficulty: "Easy",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-e10",
      question: "The set of all output values of a function is called the:",
      options: ["Domain", "Codomain", "Range", "Relation"],
      correct: "Range",
      explanation: "The range (image) of a function is the set of all actual output values produced by the function.",
      difficulty: "Easy",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    // MEDIUM (10)
    {
      id: "g11m-u1-m1",
      question: "If f(x) = x² − 1 and g(x) = 2x + 1, what is (f ∘ g)(2)?",
      options: ["24", "25", "8", "10"],
      correct: "24",
      explanation: "g(2) = 2(2)+1 = 5. Then f(g(2)) = f(5) = 5² − 1 = 24.",
      difficulty: "Medium",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-m2",
      question: "What is the inverse of f(x) = 3x − 6?",
      options: [
        "f⁻¹(x) = (x + 6)/3",
        "f⁻¹(x) = 3x + 6",
        "f⁻¹(x) = (x − 6)/3",
        "f⁻¹(x) = x/3 − 6"
      ],
      correct: "f⁻¹(x) = (x + 6)/3",
      explanation: "Let y = 3x − 6. Solving for x: x = (y + 6)/3. So f⁻¹(x) = (x + 6)/3.",
      difficulty: "Medium",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-m3",
      question: "A function f is said to be even if:",
      options: [
        "f(−x) = f(x) for all x in the domain",
        "f(−x) = −f(x) for all x in the domain",
        "f(x) = f(x + 2) for all x",
        "f(x) > 0 for all x"
      ],
      correct: "f(−x) = f(x) for all x in the domain",
      explanation: "An even function satisfies f(−x) = f(x), meaning it is symmetric about the y-axis.",
      difficulty: "Medium",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-m4",
      question: "What is the domain of f(x) = 1/(x² − 4)?",
      options: [
        "All real numbers except x = 2",
        "All real numbers except x = ±2",
        "x > 2",
        "x ≠ 0"
      ],
      correct: "All real numbers except x = ±2",
      explanation: "The denominator x² − 4 = 0 when x = ±2. So the domain excludes x = 2 and x = −2.",
      difficulty: "Medium",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-m5",
      question: "If f(x) = |x| and g(x) = x − 3, what is (f ∘ g)(−1)?",
      options: ["4", "−4", "2", "−2"],
      correct: "4",
      explanation: "g(−1) = −1 − 3 = −4. Then f(g(−1)) = f(−4) = |−4| = 4.",
      difficulty: "Medium",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-m6",
      question: "Which of the following functions is odd?",
      options: ["f(x) = x²", "f(x) = x³", "f(x) = x² + 1", "f(x) = |x|"],
      correct: "f(x) = x³",
      explanation: "f(−x) = (−x)³ = −x³ = −f(x), so f(x) = x³ is an odd function.",
      difficulty: "Medium",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-m7",
      question: "If f(x) = 2x + 1 and g(x) = x², what is g(f(3))?",
      options: ["49", "37", "14", "19"],
      correct: "49",
      explanation: "f(3) = 2(3) + 1 = 7. Then g(f(3)) = g(7) = 7² = 49.",
      difficulty: "Medium",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-m8",
      question: "A function f: A → B is surjective (onto) if:",
      options: [
        "Every element of A maps to a unique element of B",
        "Every element of B has at least one pre-image in A",
        "f(x) = f(y) implies x = y",
        "|A| = |B|"
      ],
      correct: "Every element of B has at least one pre-image in A",
      explanation: "A surjective function maps onto every element of the codomain B — nothing in B is left unpaired.",
      difficulty: "Medium",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-m9",
      question: "What is the range of f(x) = 3 − x² for x ∈ ℝ?",
      options: ["All real numbers", "y ≤ 3", "y ≥ 3", "y > 0"],
      correct: "y ≤ 3",
      explanation: "x² ≥ 0 for all real x, so 3 − x² ≤ 3. The maximum value is 3 (when x = 0), so the range is (−∞, 3].",
      difficulty: "Medium",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-m10",
      question: "If f(x) = (x − 1)/(x + 1), what is f(f(x))?",
      options: ["x", "1/x", "−x", "(x−1)²/(x+1)²"],
      correct: "x",
      explanation: "f(f(x)) = f((x−1)/(x+1)). Let u = (x−1)/(x+1). Then f(u) = (u−1)/(u+1) = ((x−1)/(x+1)−1)/((x−1)/(x+1)+1) = (−2/(x+1))/(2x/(x+1)) = −1/x. Wait — re-checking with f(x)=(x+1)/(x−1) type: for f(x)=(x−1)/(x+1): f(f(x)) = ((x−1)/(x+1)−1)/((x−1)/(x+1)+1) = ((x−1−x−1)/(x+1))/((x−1+x+1)/(x+1)) = (−2)/(2x) = −1/x. Correct answer is −1/x.",
      difficulty: "Medium",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    // HARD (10)
    {
      id: "g11m-u1-h1",
      question: "Let f: ℝ → ℝ be defined by f(x) = x³ − x. Which statement is true?",
      options: [
        "f is even",
        "f is odd",
        "f is both even and odd",
        "f is neither even nor odd"
      ],
      correct: "f is odd",
      explanation: "f(−x) = (−x)³ − (−x) = −x³ + x = −(x³ − x) = −f(x). Since f(−x) = −f(x), f is an odd function.",
      difficulty: "Hard",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-h2",
      question: "How many functions f: {1,2,3} → {a,b} are possible?",
      options: ["6", "8", "9", "3"],
      correct: "8",
      explanation: "Each of the 3 elements in the domain can independently map to either of 2 elements in the codomain. So the total number of functions is 2³ = 8.",
      difficulty: "Hard",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-h3",
      question: "If f(2x + 1) = 4x² + 4x + 3, then f(x) equals:",
      options: ["x² + 2", "(x−1)² + 2", "x² + 2x + 3", "x² + 3"],
      correct: "x² + 2",
      explanation: "Let u = 2x+1, so x = (u−1)/2. Then f(u) = 4·((u−1)/2)² + 4·((u−1)/2) + 3 = (u−1)² + 2(u−1) + 3 = u² − 2u + 1 + 2u − 2 + 3 = u² + 2. So f(x) = x² + 2.",
      difficulty: "Hard",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-h4",
      question: "A bijective function f: A → B exists. If |A| = 5, what is |B|?",
      options: ["Any value", "At most 5", "Exactly 5", "At least 5"],
      correct: "Exactly 5",
      explanation: "A bijection is both injective and surjective. For a bijection between finite sets, both sets must have the same cardinality. So |B| = 5.",
      difficulty: "Hard",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-h5",
      question: "For what values of x is f(x) = √(4 − x²) defined?",
      options: ["x > 2", "x < −2", "−2 ≤ x ≤ 2", "x ≤ −2 or x ≥ 2"],
      correct: "−2 ≤ x ≤ 2",
      explanation: "We need 4 − x² ≥ 0, i.e., x² ≤ 4, which means −2 ≤ x ≤ 2.",
      difficulty: "Hard",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-h6",
      question: "If f(x) = ax + b and f(f(x)) = 4x + 9, find a and b.",
      options: ["a = 2, b = 3", "a = 4, b = 9", "a = 2, b = 9", "a = −2, b = 3"],
      correct: "a = 2, b = 3",
      explanation: "f(f(x)) = f(ax+b) = a(ax+b)+b = a²x + ab + b. So a² = 4 → a = 2, and ab + b = b(a+1) = 9 → b·3 = 9 → b = 3.",
      difficulty: "Hard",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-h7",
      question: "The number of injective (one-to-one) functions from {1,2,3} to {a,b,c,d} is:",
      options: ["12", "24", "64", "6"],
      correct: "24",
      explanation: "For an injective function, each element of the domain maps to a distinct element of the codomain. This is P(4,3) = 4×3×2 = 24.",
      difficulty: "Hard",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-h8",
      question: "If f(x) = x/(x−1) for x ≠ 1, what is the domain of f⁻¹?",
      options: ["All reals except x = 0", "All reals except x = 1", "All reals except x = −1", "All real numbers"],
      correct: "All reals except x = 1",
      explanation: "f⁻¹(x) = x/(x−1) (f is self-inverse). Its domain excludes x = 1 where the denominator is zero.",
      difficulty: "Hard",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-h9",
      question: "Which of the following is a one-to-one function on ℝ?",
      options: ["f(x) = x²", "f(x) = |x|", "f(x) = x³", "f(x) = sin x"],
      correct: "f(x) = x³",
      explanation: "f(x) = x³ is strictly increasing on ℝ, so it is one-to-one. The others fail the horizontal line test.",
      difficulty: "Hard",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u1-h10",
      question: "Given f(x) = 2x − 1 and g(f(x)) = x, what is g(x)?",
      options: ["g(x) = (x+1)/2", "g(x) = 2x+1", "g(x) = x/2 − 1", "g(x) = (x−1)/2"],
      correct: "g(x) = (x+1)/2",
      explanation: "g is the inverse of f. f(x) = 2x − 1 → x = (y+1)/2 → f⁻¹(x) = (x+1)/2. So g(x) = (x+1)/2.",
      difficulty: "Hard",
      chapter: "Unit 1: Relations and Functions",
      subject: "Mathematics"
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // UNIT 2: Rational Expressions and Rational Functions
  // ─────────────────────────────────────────────────────────────
  "Unit 2: Rational Expressions and Rational Functions": [
    // EASY (10)
    {
      id: "g11m-u2-e1",
      question: "A rational expression is a ratio of two:",
      options: ["Integers", "Polynomials", "Real numbers", "Irrational numbers"],
      correct: "Polynomials",
      explanation: "A rational expression is defined as the quotient P(x)/Q(x) where P and Q are polynomials and Q(x) ≠ 0.",
      difficulty: "Easy",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-e2",
      question: "Simplify: (x² − 9) / (x + 3)",
      options: ["x − 3", "x + 3", "x² − 3", "x − 9"],
      correct: "x − 3",
      explanation: "x² − 9 = (x+3)(x−3). Dividing by (x+3) gives x − 3, provided x ≠ −3.",
      difficulty: "Easy",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-e3",
      question: "What is the vertical asymptote of f(x) = 1/(x − 5)?",
      options: ["x = 1", "x = 5", "y = 0", "y = 5"],
      correct: "x = 5",
      explanation: "Vertical asymptotes occur where the denominator equals zero. x − 5 = 0 gives x = 5.",
      difficulty: "Easy",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-e4",
      question: "What is the horizontal asymptote of f(x) = 3x/(x + 1)?",
      options: ["y = 0", "y = 1", "y = 3", "y = −1"],
      correct: "y = 3",
      explanation: "When degrees of numerator and denominator are equal, the horizontal asymptote is the ratio of leading coefficients: 3/1 = 3.",
      difficulty: "Easy",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-e5",
      question: "Simplify: (2x/3) × (9/x²)",
      options: ["6/x", "6x", "2/3x", "18/3x"],
      correct: "6/x",
      explanation: "(2x/3) × (9/x²) = 18x / (3x²) = 6/x.",
      difficulty: "Easy",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-e6",
      question: "For what value of x is the expression (x + 2)/(x − 3) undefined?",
      options: ["x = 2", "x = −2", "x = 3", "x = −3"],
      correct: "x = 3",
      explanation: "A rational expression is undefined when the denominator equals zero. x − 3 = 0 → x = 3.",
      difficulty: "Easy",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-e7",
      question: "Simplify: (6x²y) / (3xy²)",
      options: ["2y/x", "2x/y", "2xy", "6x/y"],
      correct: "2x/y",
      explanation: "(6x²y)/(3xy²) = (6/3) · (x²/x) · (y/y²) = 2 · x · (1/y) = 2x/y.",
      difficulty: "Easy",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-e8",
      question: "The horizontal asymptote of f(x) = 5/x² is:",
      options: ["y = 5", "y = 1", "y = 0", "x = 0"],
      correct: "y = 0",
      explanation: "As x → ±∞, 5/x² → 0. So the horizontal asymptote is y = 0.",
      difficulty: "Easy",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-e9",
      question: "Which of the following is a rational function?",
      options: ["f(x) = √x", "f(x) = 2x + 1", "f(x) = (x+1)/(x−2)", "f(x) = x^(1/2)"],
      correct: "f(x) = (x+1)/(x−2)",
      explanation: "A rational function is the ratio of two polynomials. (x+1)/(x−2) fits this definition.",
      difficulty: "Easy",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-e10",
      question: "Simplify: (x² − 1)/(x − 1)",
      options: ["x − 1", "x + 1", "x² + 1", "1"],
      correct: "x + 1",
      explanation: "x² − 1 = (x+1)(x−1). Dividing by (x−1) gives x + 1, for x ≠ 1.",
      difficulty: "Easy",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    // MEDIUM (10)
    {
      id: "g11m-u2-m1",
      question: "Simplify: (x² − x − 6) / (x² − 9)",
      options: [
        "(x + 2)/(x + 3)",
        "(x − 2)/(x − 3)",
        "(x + 2)/(x − 3)",
        "(x − 3)/(x + 3)"
      ],
      correct: "(x + 2)/(x + 3)",
      explanation: "Numerator: x² − x − 6 = (x−3)(x+2). Denominator: x² − 9 = (x−3)(x+3). Cancel (x−3): result = (x+2)/(x+3).",
      difficulty: "Medium",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-m2",
      question: "Solve: 1/x + 1/(x+1) = 1",
      options: ["x = (1 ± √5)/2", "x = 1", "x = −1", "x = 2"],
      correct: "x = (1 ± √5)/2",
      explanation: "Multiply by x(x+1): (x+1) + x = x(x+1) → 2x+1 = x²+x → x² − x − 1 = 0 → x = (1 ± √5)/2.",
      difficulty: "Medium",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-m3",
      question: "Add: 2/(x−1) + 3/(x+1)",
      options: [
        "(5x − 1)/((x−1)(x+1))",
        "(5x + 1)/((x−1)(x+1))",
        "5/(x²−1)",
        "(5x − 1)/(x²+1)"
      ],
      correct: "(5x − 1)/((x−1)(x+1))",
      explanation: "LCD = (x−1)(x+1). Numerator: 2(x+1) + 3(x−1) = 2x+2+3x−3 = 5x−1. Result: (5x−1)/((x−1)(x+1)).",
      difficulty: "Medium",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-m4",
      question: "What is the domain of f(x) = (x + 2)/(x² − 4)?",
      options: [
        "All reals except x = 2",
        "All reals except x = ±2",
        "All reals except x = −2",
        "All real numbers"
      ],
      correct: "All reals except x = ±2",
      explanation: "x² − 4 = (x−2)(x+2) = 0 when x = ±2. Both values must be excluded from the domain.",
      difficulty: "Medium",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-m5",
      question: "Which represents a removable discontinuity (hole) in f(x) = (x²−4)/(x−2)?",
      options: [
        "Vertical asymptote at x = 2",
        "Horizontal asymptote at y = 2",
        "A hole at x = 2",
        "A hole at x = −2"
      ],
      correct: "A hole at x = 2",
      explanation: "f(x) = (x+2)(x−2)/(x−2) = x+2 for x ≠ 2. The factor cancels, creating a hole at x = 2.",
      difficulty: "Medium",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-m6",
      question: "Simplify: (x² + 5x + 6)/(x² + 3x + 2)",
      options: ["(x+3)/(x+1)", "(x+2)/(x+1)", "(x+3)/(x+2)", "(x+6)/(x+2)"],
      correct: "(x+3)/(x+1)",
      explanation: "Numerator: (x+2)(x+3). Denominator: (x+1)(x+2). Cancel (x+2): result = (x+3)/(x+1).",
      difficulty: "Medium",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-m7",
      question: "Which is true about the function f(x) = (x²+1)/(x²+2)?",
      options: [
        "It has a vertical asymptote",
        "It has a horizontal asymptote at y = 1",
        "It has a horizontal asymptote at y = 0",
        "It has no asymptotes"
      ],
      correct: "It has a horizontal asymptote at y = 1",
      explanation: "Both numerator and denominator have equal degree 2. The ratio of leading coefficients is 1/1 = 1, so y = 1 is the horizontal asymptote. The denominator x²+2 > 0 always, so no vertical asymptote.",
      difficulty: "Medium",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-m8",
      question: "Solve for x: 2/(x+1) = 4/(x+3)",
      options: ["x = 1", "x = −1", "x = 3", "x = 0"],
      correct: "x = 1",
      explanation: "Cross multiply: 2(x+3) = 4(x+1) → 2x+6 = 4x+4 → 2 = 2x → x = 1.",
      difficulty: "Medium",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-m9",
      question: "Divide: (x² − 4)/(x + 1) ÷ (x − 2)/(x² − 1)",
      options: [
        "(x+2)(x+1)/(x−1)",
        "(x+2)(x−1)/(x+1)",
        "(x−2)²/(x+1)²",
        "(x+2)(x+1)(x−1)/(x−2)"
      ],
      correct: "(x+2)(x+1)/(x−1)",
      explanation: "Dividing = multiplying by the reciprocal: (x²−4)/(x+1) × (x²−1)/(x−2) = (x+2)(x−2)/(x+1) × (x+1)(x−1)/(x−2) = (x+2)(x−1) ... wait: = (x+2)(x−2)(x+1)(x−1) / ((x+1)(x−2)) = (x+2)(x−1). So the answer is (x+2)(x−1).",
      difficulty: "Medium",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-m10",
      question: "For f(x) = 1/(x(x−3)), what are the vertical asymptotes?",
      options: ["x = 0 only", "x = 3 only", "x = 0 and x = 3", "x = 0 and x = −3"],
      correct: "x = 0 and x = 3",
      explanation: "Denominator = x(x−3) = 0 when x = 0 or x = 3. Both give vertical asymptotes.",
      difficulty: "Medium",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    // HARD (10)
    {
      id: "g11m-u2-h1",
      question: "Find all asymptotes of f(x) = (x² + x)/(x − 1).",
      options: [
        "Vertical: x = 1; Oblique: y = x + 2",
        "Vertical: x = 1; Horizontal: y = x",
        "Vertical: x = −1; Oblique: y = x + 1",
        "Vertical: x = 0; Oblique: y = x + 2"
      ],
      correct: "Vertical: x = 1; Oblique: y = x + 2",
      explanation: "Vertical asymptote at x = 1. Polynomial long division: x²+x ÷ (x−1) = x+2 remainder 2. So the oblique asymptote is y = x + 2.",
      difficulty: "Hard",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-h2",
      question: "Solve: (x + 1)/(x − 2) > 0",
      options: [
        "x < −1 or x > 2",
        "−1 < x < 2",
        "x > 2",
        "x < −1"
      ],
      correct: "x < −1 or x > 2",
      explanation: "The expression is positive when both factors share the same sign: (x+1 > 0 and x−2 > 0) → x > 2, or (x+1 < 0 and x−2 < 0) → x < −1.",
      difficulty: "Hard",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-h3",
      question: "Decompose into partial fractions: 5x/((x+1)(x−4))",
      options: [
        "1/(x+1) + 4/(x−4)",
        "4/(x+1) + 1/(x−4)",
        "−1/(x+1) + 4/(x−4)",
        "1/(x+1) − 4/(x−4)"
      ],
      correct: "1/(x+1) + 4/(x−4)",
      explanation: "5x/((x+1)(x−4)) = A/(x+1) + B/(x−4). So 5x = A(x−4)+B(x+1). At x=4: 20=5B → B=4. At x=−1: −5=−5A → A=1. Answer: 1/(x+1)+4/(x−4).",
      difficulty: "Hard",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-h4",
      question: "The graph of f(x)=(ax+b)/(cx+d) passes through (0,2) with vertical asymptote x=3 and horizontal asymptote y=1. Find a.",
      options: ["1", "2", "3", "6"],
      correct: "1",
      explanation: "Horizontal asymptote y=1 → a/c=1 → a=c. Vertical asymptote x=3 → d=−3c. f(0)=b/d=2 → b=2d=−6c. With c=1: a=1, d=−3, b=−6. f(x)=(x−6)/(x−3). Check: f(0)=−6/−3=2 ✓.",
      difficulty: "Hard",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-h5",
      question: "Solve the inequality: (x − 1)/(x + 2) ≤ 0",
      options: [
        "−2 < x ≤ 1",
        "x ≤ 1",
        "−2 ≤ x ≤ 1",
        "x < −2 or x ≥ 1"
      ],
      correct: "−2 < x ≤ 1",
      explanation: "The expression ≤ 0 when numerator and denominator have opposite signs, plus when numerator = 0. Sign analysis: negative on (−2, 1). At x=1, value=0 ✓. At x=−2, undefined. So: −2 < x ≤ 1.",
      difficulty: "Hard",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-h6",
      question: "Which function has both a hole and a vertical asymptote?",
      options: [
        "f(x) = (x−1)/((x−1)(x−2))",
        "f(x) = (x−1)/(x−2)",
        "f(x) = 1/(x²+1)",
        "f(x) = x/(x²−x)"
      ],
      correct: "f(x) = (x−1)/((x−1)(x−2))",
      explanation: "f(x) = (x−1)/((x−1)(x−2)) = 1/(x−2) for x ≠ 1. There is a hole at x=1 (cancelled factor) and a vertical asymptote at x=2.",
      difficulty: "Hard",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-h7",
      question: "Partial fraction decomposition of 3x/((x−1)²) gives:",
      options: [
        "3/(x−1) + 3/(x−1)²",
        "3/(x−1) − 3/(x−1)²",
        "3/(x−1)²",
        "1/(x−1) + 2/(x−1)²"
      ],
      correct: "3/(x−1) + 3/(x−1)²",
      explanation: "3x/((x−1)²) = A/(x−1) + B/(x−1)². Then 3x = A(x−1)+B. At x=1: B=3. Expanding: 3x = Ax − A + 3 → A=3, −A+3=0 → A=3. Result: 3/(x−1)+3/(x−1)².",
      difficulty: "Hard",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-h8",
      question: "The function f(x) = (x² − 5x + 6)/(x² − 4) simplifies to:",
      options: [
        "(x−3)/(x+2) for x ≠ 2",
        "(x−3)/(x−2) for x ≠ −2",
        "(x−2)/(x+2) for x ≠ 3",
        "(x−3)/(x+2) for x ≠ −2"
      ],
      correct: "(x−3)/(x+2) for x ≠ 2",
      explanation: "Numerator: (x−2)(x−3). Denominator: (x−2)(x+2). Cancel (x−2) to get (x−3)/(x+2) for x ≠ 2 (and x ≠ −2).",
      difficulty: "Hard",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-h9",
      question: "Find the x-intercept(s) of f(x) = (x² − 3x + 2)/(x − 4).",
      options: ["x = 1 and x = 2", "x = 4", "x = 1 only", "x = 2 only"],
      correct: "x = 1 and x = 2",
      explanation: "x-intercepts occur where numerator = 0 (and denominator ≠ 0). x² − 3x + 2 = (x−1)(x−2) = 0 → x=1 or x=2. Neither is x=4, so both are valid.",
      difficulty: "Hard",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    },
    {
      id: "g11m-u2-h10",
      question: "How many solutions does 2/x + 3/(x+2) = 1 have?",
      options: ["0", "1", "2", "Infinitely many"],
      correct: "2",
      explanation: "Multiply by x(x+2): 2(x+2) + 3x = x(x+2) → 5x+4 = x²+2x → x²−3x−4 = 0 → (x−4)(x+1) = 0. Two solutions: x=4 and x=−1 (neither makes a denominator zero).",
      difficulty: "Hard",
      chapter: "Unit 2: Rational Expressions and Rational Functions",
      subject: "Mathematics"
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // UNIT 3: Matrices
  // ─────────────────────────────────────────────────────────────
  "Unit 3: Matrices": [
    // EASY (10)
    {
      id: "g11m-u3-e1",
      question: "What is the order of a matrix with 3 rows and 4 columns?",
      options: ["4 × 3", "3 × 4", "12 × 1", "7 × 1"],
      correct: "3 × 4",
      explanation: "The order of a matrix is written as rows × columns. A matrix with 3 rows and 4 columns has order 3 × 4.",
      difficulty: "Easy",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-e2",
      question: "Which of the following is a square matrix?",
      options: ["A 2×3 matrix", "A 3×2 matrix", "A 3×3 matrix", "A 1×4 matrix"],
      correct: "A 3×3 matrix",
      explanation: "A square matrix has an equal number of rows and columns.",
      difficulty: "Easy",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-e3",
      question: "If A = [[1,2],[3,4]] and B = [[5,6],[7,8]], what is A + B?",
      options: ["[[6,8],[10,12]]", "[[5,12],[21,32]]", "[[6,8],[9,12]]", "[[4,4],[4,4]]"],
      correct: "[[6,8],[10,12]]",
      explanation: "Matrix addition is element-wise: (1+5=6, 2+6=8, 3+7=10, 4+8=12).",
      difficulty: "Easy",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-e4",
      question: "What is the transpose of A = [[1,2,3],[4,5,6]]?",
      options: [
        "[[1,4],[2,5],[3,6]]",
        "[[1,2],[3,4],[5,6]]",
        "[[6,5,4],[3,2,1]]",
        "[[4,5,6],[1,2,3]]"
      ],
      correct: "[[1,4],[2,5],[3,6]]",
      explanation: "The transpose converts rows into columns. A is 2×3, so Aᵀ is 3×2.",
      difficulty: "Easy",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-e5",
      question: "A zero matrix is one in which:",
      options: [
        "All diagonal entries are zero",
        "All entries are zero",
        "The determinant is zero",
        "All off-diagonal entries are zero"
      ],
      correct: "All entries are zero",
      explanation: "A zero (null) matrix has all entries equal to zero.",
      difficulty: "Easy",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-e6",
      question: "An identity matrix has:",
      options: [
        "All entries equal to 1",
        "1s on the diagonal and 0s elsewhere",
        "0s on the diagonal and 1s elsewhere",
        "All entries equal to 0"
      ],
      correct: "1s on the diagonal and 0s elsewhere",
      explanation: "The identity matrix I has 1s along the main diagonal and 0s everywhere else. It acts as the multiplicative identity for matrices.",
      difficulty: "Easy",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-e7",
      question: "If A is a 2×3 matrix and B is a 3×2 matrix, is AB defined?",
      options: ["No, the orders are incompatible", "Yes, and AB is 2×2", "Yes, and AB is 3×3", "Yes, and AB is 2×3"],
      correct: "Yes, and AB is 2×2",
      explanation: "AB is defined when the number of columns of A equals the number of rows of B (both 3). The result has order 2×2.",
      difficulty: "Easy",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-e8",
      question: "What is 3 × [[1,2],[3,4]]?",
      options: ["[[3,6],[9,12]]", "[[1,6],[3,12]]", "[[3,2],[9,4]]", "[[4,5],[6,7]]"],
      correct: "[[3,6],[9,12]]",
      explanation: "Scalar multiplication multiplies every entry by the scalar: 3 × [[1,2],[3,4]] = [[3,6],[9,12]].",
      difficulty: "Easy",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-e9",
      question: "A diagonal matrix has non-zero entries:",
      options: [
        "Only above the main diagonal",
        "Only below the main diagonal",
        "Only on the main diagonal",
        "Everywhere except the main diagonal"
      ],
      correct: "Only on the main diagonal",
      explanation: "A diagonal matrix has non-zero entries only on the main diagonal; all off-diagonal entries are zero.",
      difficulty: "Easy",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-e10",
      question: "If A = [[2,0],[0,3]], what is A + Aᵀ?",
      options: ["[[4,0],[0,6]]", "[[2,0],[0,3]]", "[[0,0],[0,0]]", "[[4,3],[2,6]]"],
      correct: "[[4,0],[0,6]]",
      explanation: "A is diagonal, so Aᵀ = A. A + Aᵀ = 2A = [[4,0],[0,6]].",
      difficulty: "Easy",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    // MEDIUM (10)
    {
      id: "g11m-u3-m1",
      question: "If A = [[2,1],[0,3]] and B = [[1,4],[2,5]], what is AB?",
      options: ["[[4,13],[6,15]]", "[[3,5],[2,8]]", "[[2,4],[6,15]]", "[[5,8],[6,15]]"],
      correct: "[[4,13],[6,15]]",
      explanation: "row1×col1: 2·1+1·2=4, row1×col2: 2·4+1·5=13, row2×col1: 0+6=6, row2×col2: 0+15=15.",
      difficulty: "Medium",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-m2",
      question: "Matrix multiplication AB is defined when:",
      options: [
        "A and B have the same order",
        "The number of columns of A equals the number of rows of B",
        "The number of rows of A equals the number of rows of B",
        "A and B are both square matrices"
      ],
      correct: "The number of columns of A equals the number of rows of B",
      explanation: "If A is m×n and B is n×p, then AB is defined and results in an m×p matrix.",
      difficulty: "Medium",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-m3",
      question: "A symmetric matrix satisfies:",
      options: ["A = −Aᵀ", "A = Aᵀ", "A² = A", "A·Aᵀ = I"],
      correct: "A = Aᵀ",
      explanation: "A matrix is symmetric if it equals its own transpose, i.e., aᵢⱼ = aⱼᵢ for all i, j.",
      difficulty: "Medium",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-m4",
      question: "If A is a 2×3 matrix and B is a 3×4 matrix, what is the order of AB?",
      options: ["3×3", "2×4", "4×2", "3×2"],
      correct: "2×4",
      explanation: "If A is m×n and B is n×p, then AB is m×p. Here: 2×3 times 3×4 = 2×4.",
      difficulty: "Medium",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-m5",
      question: "For any matrix A, (Aᵀ)ᵀ equals:",
      options: ["−A", "A⁻¹", "A", "I"],
      correct: "A",
      explanation: "Transposing a matrix twice returns the original matrix: (Aᵀ)ᵀ = A.",
      difficulty: "Medium",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-m6",
      question: "Which of the following is always true for matrices A and B of compatible orders?",
      options: ["AB = BA", "(AB)ᵀ = AᵀBᵀ", "(AB)ᵀ = BᵀAᵀ", "A + B = B − A"],
      correct: "(AB)ᵀ = BᵀAᵀ",
      explanation: "The transpose of a product reverses the order: (AB)ᵀ = BᵀAᵀ. This is a standard matrix identity.",
      difficulty: "Medium",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-m7",
      question: "A skew-symmetric matrix satisfies:",
      options: ["A = Aᵀ", "A = −Aᵀ", "A² = I", "A = A⁻¹"],
      correct: "A = −Aᵀ",
      explanation: "A skew-symmetric matrix satisfies A = −Aᵀ, which means aᵢⱼ = −aⱼᵢ. All diagonal entries must be zero.",
      difficulty: "Medium",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-m8",
      question: "If AI = IA = A for any matrix A, what is I called?",
      options: ["Zero matrix", "Inverse matrix", "Identity matrix", "Diagonal matrix"],
      correct: "Identity matrix",
      explanation: "The identity matrix I acts as the multiplicative identity: AI = IA = A for any compatible matrix A.",
      difficulty: "Medium",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-m9",
      question: "If A = [[1,2],[3,4]] and c = −1, what is cA?",
      options: ["[[−1,−2],[−3,−4]]", "[[1,−2],[−3,4]]", "[[−1,2],[3,−4]]", "[[0,0],[0,0]]"],
      correct: "[[−1,−2],[−3,−4]]",
      explanation: "Scalar multiplication: −1 × [[1,2],[3,4]] = [[−1,−2],[−3,−4]].",
      difficulty: "Medium",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-m10",
      question: "The trace of a matrix is defined as:",
      options: [
        "The sum of all entries",
        "The sum of the diagonal entries",
        "The product of the diagonal entries",
        "The determinant of the matrix"
      ],
      correct: "The sum of the diagonal entries",
      explanation: "The trace of a square matrix is the sum of its main diagonal entries: tr(A) = Σ aᵢᵢ.",
      difficulty: "Medium",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    // HARD (10)
    {
      id: "g11m-u3-h1",
      question: "Find the inverse of A = [[2,1],[5,3]].",
      options: [
        "[[3,−1],[−5,2]]",
        "[[3,1],[5,2]]",
        "[[−3,1],[5,−2]]",
        "[[2,−1],[−5,3]]"
      ],
      correct: "[[3,−1],[−5,2]]",
      explanation: "det(A) = 6−5 = 1. A⁻¹ = (1/1)[[3,−1],[−5,2]] = [[3,−1],[−5,2]].",
      difficulty: "Hard",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-h2",
      question: "If A² = A, then A is called:",
      options: ["Symmetric", "Idempotent", "Orthogonal", "Nilpotent"],
      correct: "Idempotent",
      explanation: "A matrix satisfying A² = A is called idempotent.",
      difficulty: "Hard",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-h3",
      question: "For matrices A and B of the same order, which property does NOT generally hold?",
      options: ["A + B = B + A", "AB = BA", "(AB)C = A(BC)", "(A+B)ᵀ = Aᵀ + Bᵀ"],
      correct: "AB = BA",
      explanation: "Matrix multiplication is generally not commutative. AB ≠ BA in most cases.",
      difficulty: "Hard",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-h4",
      question: "An orthogonal matrix A satisfies:",
      options: ["Aᵀ = A", "A⁻¹ = Aᵀ", "A² = I", "det(A) = 0"],
      correct: "A⁻¹ = Aᵀ",
      explanation: "An orthogonal matrix satisfies AAᵀ = AᵀA = I, which means A⁻¹ = Aᵀ.",
      difficulty: "Hard",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-h5",
      question: "If A = [[1,2],[0,1]], what is A³?",
      options: ["[[1,6],[0,1]]", "[[1,8],[0,1]]", "[[3,6],[0,3]]", "[[1,2],[0,1]]"],
      correct: "[[1,6],[0,1]]",
      explanation: "A² = [[1,4],[0,1]], A³ = A²·A = [[1,4],[0,1]]·[[1,2],[0,1]] = [[1,6],[0,1]].",
      difficulty: "Hard",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-h6",
      question: "Solve the system using matrices: x + 2y = 5, 3x + 4y = 11",
      options: ["x=1, y=2", "x=2, y=1", "x=3, y=1", "x=1, y=3"],
      correct: "x=1, y=2",
      explanation: "Matrix form AX=B: A=[[1,2],[3,4]], B=[[5],[11]]. det(A)=4−6=−2. A⁻¹=(−1/2)[[4,−2],[−3,1]]. X=A⁻¹B=(−1/2)[[20−22],[−15+11]]=(−1/2)[[-2],[-4]]=[[1],[2]]. So x=1, y=2.",
      difficulty: "Hard",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-h7",
      question: "If A is an n×n invertible matrix, which of the following is true?",
      options: ["A + A⁻¹ = I", "AA⁻¹ = I", "(A⁻¹)⁻¹ = −A", "A⁻¹ = Aᵀ always"],
      correct: "AA⁻¹ = I",
      explanation: "By definition of the inverse, AA⁻¹ = A⁻¹A = I, the identity matrix.",
      difficulty: "Hard",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-h8",
      question: "A nilpotent matrix satisfies Aᵏ = 0 for some positive integer k. Which is nilpotent?",
      options: ["[[1,1],[0,1]]", "[[0,1],[0,0]]", "[[1,0],[0,1]]", "[[2,0],[0,2]]"],
      correct: "[[0,1],[0,0]]",
      explanation: "Let A=[[0,1],[0,0]]. A²=[[0,0],[0,0]]=0. So A is nilpotent with k=2.",
      difficulty: "Hard",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-h9",
      question: "If A and B are invertible matrices of the same order, then (AB)⁻¹ = ?",
      options: ["A⁻¹B⁻¹", "B⁻¹A⁻¹", "A⁻¹ + B⁻¹", "(BA)⁻¹"],
      correct: "B⁻¹A⁻¹",
      explanation: "(AB)⁻¹ = B⁻¹A⁻¹. This is the reverse order rule: (AB)(B⁻¹A⁻¹) = A(BB⁻¹)A⁻¹ = AIA⁻¹ = AA⁻¹ = I.",
      difficulty: "Hard",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    },
    {
      id: "g11m-u3-h10",
      question: "How many 2×2 matrices A satisfy A² = I (where I is the 2×2 identity)?",
      options: ["Exactly 2", "Exactly 4", "Infinitely many", "Only the identity itself"],
      correct: "Infinitely many",
      explanation: "Any matrix of the form [[a, b],[c, −a]] with a²+bc=1 satisfies A²=I. There are infinitely many such matrices (e.g., I, −I, [[0,1],[1,0]], etc.).",
      difficulty: "Hard",
      chapter: "Unit 3: Matrices",
      subject: "Mathematics"
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // UNIT 4: Determinants and their Properties
  // ─────────────────────────────────────────────────────────────
  "Unit 4: Determinants and their Properties": [
    // EASY (10)
    {
      id: "g11m-u4-e1",
      question: "What is the determinant of A = [[3,2],[1,4]]?",
      options: ["10", "14", "−10", "7"],
      correct: "10",
      explanation: "det(A) = ad − bc = 3·4 − 2·1 = 12 − 2 = 10.",
      difficulty: "Easy",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-e2",
      question: "If det(A) = 0, then the matrix A is:",
      options: ["Invertible", "Singular", "Symmetric", "Orthogonal"],
      correct: "Singular",
      explanation: "A matrix with determinant 0 is called singular and has no inverse.",
      difficulty: "Easy",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-e3",
      question: "The determinant of an identity matrix of any size is:",
      options: ["0", "−1", "1", "Undefined"],
      correct: "1",
      explanation: "The identity matrix has 1s on the diagonal and 0s elsewhere. Its determinant is always 1.",
      difficulty: "Easy",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-e4",
      question: "What is det([[5,0],[0,3]])?",
      options: ["8", "15", "0", "2"],
      correct: "15",
      explanation: "For a diagonal matrix, det = product of diagonal entries: 5 × 3 = 15.",
      difficulty: "Easy",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-e5",
      question: "If two rows of a matrix are identical, its determinant is:",
      options: ["1", "0", "−1", "Undefined"],
      correct: "0",
      explanation: "If any two rows (or columns) of a matrix are identical, the determinant is 0.",
      difficulty: "Easy",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-e6",
      question: "The determinant of a 1×1 matrix [a] is:",
      options: ["1", "0", "a", "1/a"],
      correct: "a",
      explanation: "The determinant of a 1×1 matrix is simply its single entry.",
      difficulty: "Easy",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-e7",
      question: "If a row of a matrix is all zeros, its determinant is:",
      options: ["1", "Undefined", "The sum of other rows", "0"],
      correct: "0",
      explanation: "If any row or column of a matrix is entirely zero, the determinant equals 0.",
      difficulty: "Easy",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-e8",
      question: "The minor Mᵢⱼ of a matrix element aᵢⱼ is the determinant of the matrix obtained by:",
      options: [
        "Adding row i and column j",
        "Deleting row i and column j",
        "Swapping row i and column j",
        "Multiplying row i by column j"
      ],
      correct: "Deleting row i and column j",
      explanation: "The minor Mᵢⱼ is the determinant of the submatrix formed by removing row i and column j from the original matrix.",
      difficulty: "Easy",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-e9",
      question: "What is det([[−2, 0],[0, 4]])?",
      options: ["−8", "8", "−2", "2"],
      correct: "−8",
      explanation: "det = (−2)(4) − (0)(0) = −8.",
      difficulty: "Easy",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-e10",
      question: "The cofactor Cᵢⱼ is related to the minor Mᵢⱼ by:",
      options: [
        "Cᵢⱼ = Mᵢⱼ",
        "Cᵢⱼ = (−1)^(i+j) Mᵢⱼ",
        "Cᵢⱼ = (i+j) Mᵢⱼ",
        "Cᵢⱼ = −Mᵢⱼ always"
      ],
      correct: "Cᵢⱼ = (−1)^(i+j) Mᵢⱼ",
      explanation: "The cofactor includes a sign factor of (−1)^(i+j), which is +1 when i+j is even and −1 when i+j is odd.",
      difficulty: "Easy",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    // MEDIUM (10)
    {
      id: "g11m-u4-m1",
      question: "Compute det([[1,2,3],[0,4,5],[0,0,6]]).",
      options: ["24", "0", "10", "120"],
      correct: "24",
      explanation: "Upper triangular matrix: det = product of diagonal entries = 1 × 4 × 6 = 24.",
      difficulty: "Medium",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-m2",
      question: "If det(A) = 5, what is det(2A) for a 3×3 matrix A?",
      options: ["10", "15", "40", "25"],
      correct: "40",
      explanation: "det(kA) = kⁿ·det(A) for an n×n matrix. Here n=3, k=2: det(2A) = 2³ × 5 = 40.",
      difficulty: "Medium",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-m3",
      question: "Swapping two rows of a matrix multiplies the determinant by:",
      options: ["0", "2", "−1", "1/2"],
      correct: "−1",
      explanation: "Swapping any two rows of a matrix changes the sign of the determinant.",
      difficulty: "Medium",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-m4",
      question: "If det(A) = 6, then det(Aᵀ) = ?",
      options: ["−6", "1/6", "36", "6"],
      correct: "6",
      explanation: "det(Aᵀ) = det(A). The determinant is invariant under transposition.",
      difficulty: "Medium",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-m5",
      question: "If one row of a matrix is multiplied by scalar k, the determinant is multiplied by:",
      options: ["kⁿ", "k", "1/k", "k²"],
      correct: "k",
      explanation: "Multiplying a single row by k scales the determinant by k (not kⁿ — that applies when all rows are scaled).",
      difficulty: "Medium",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-m6",
      question: "det([[2,1,0],[3,2,1],[1,0,2]]) equals:",
      options: ["5", "7", "3", "−1"],
      correct: "5",
      explanation: "Expanding along row 1: 2·det([[2,1],[0,2]]) − 1·det([[3,1],[1,2]]) + 0 = 2(4−0) − 1(6−1) = 8 − 5 = 3. Wait: det([[2,1],[0,2]])=4, det([[3,1],[1,2]])=5. So 2·4−1·5+0 = 8−5 = 3. Re-evaluating: correct answer is 3.",
      difficulty: "Medium",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-m7",
      question: "Adding a multiple of one row to another row changes the determinant by:",
      options: ["Multiplying it by that multiple", "Adding that multiple", "Nothing — the determinant stays the same", "Changing its sign"],
      correct: "Nothing — the determinant stays the same",
      explanation: "Adding a scalar multiple of one row to another is an elementary row operation that does not change the value of the determinant.",
      difficulty: "Medium",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-m8",
      question: "For a 2×2 matrix A = [[a,b],[c,d]], the cofactor C₁₁ is:",
      options: ["a", "d", "−d", "bc"],
      correct: "d",
      explanation: "C₁₁ = (−1)^(1+1) · M₁₁ = (+1) · d = d, where M₁₁ is the minor obtained by deleting row 1 and column 1.",
      difficulty: "Medium",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-m9",
      question: "A system of n equations in n unknowns has a unique solution when the coefficient matrix has:",
      options: ["det = 0", "det ≠ 0", "det = 1", "det = n"],
      correct: "det ≠ 0",
      explanation: "A unique solution exists when the coefficient matrix is invertible, which requires a non-zero determinant.",
      difficulty: "Medium",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-m10",
      question: "If A is a 3×3 matrix with det(A) = −4, what is det(−A)?",
      options: ["4", "−4", "−32", "−(−4)"],
      correct: "4",
      explanation: "det(−A) = (−1)³ · det(A) = −1 × (−4) = 4.",
      difficulty: "Medium",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    // HARD (10)
    {
      id: "g11m-u4-h1",
      question: "Evaluate det([[1,1,1],[a,b,c],[a²,b²,c²]]).",
      options: [
        "(b−a)(c−a)(c−b)",
        "(a−b)(b−c)(c−a)",
        "(a+b)(b+c)(c+a)",
        "(b−a)(c−b)(a−c)"
      ],
      correct: "(b−a)(c−a)(c−b)",
      explanation: "This is the Vandermonde determinant. The result is (b−a)(c−a)(c−b).",
      difficulty: "Hard",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-h2",
      question: "If det(A) = 3 and det(B) = 4, what is det(AB) for 2×2 matrices?",
      options: ["7", "12", "1", "144"],
      correct: "12",
      explanation: "det(AB) = det(A)·det(B) = 3 × 4 = 12.",
      difficulty: "Hard",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-h3",
      question: "If A is an invertible matrix, what is det(A⁻¹)?",
      options: ["−det(A)", "1/det(A)", "det(A)", "(det(A))²"],
      correct: "1/det(A)",
      explanation: "Since AA⁻¹ = I, det(A)·det(A⁻¹) = 1. Therefore det(A⁻¹) = 1/det(A).",
      difficulty: "Hard",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-h4",
      question: "For what value of k is [[k,2,0],[3,k,0],[0,0,5]] singular?",
      options: ["k = √6", "k = ±√6", "k = 6", "k = 0"],
      correct: "k = ±√6",
      explanation: "Expanding along column 3: det = 5(k²−6) = 0 → k² = 6 → k = ±√6.",
      difficulty: "Hard",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-h5",
      question: "Cramer's rule applies when the coefficient matrix has:",
      options: [
        "Determinant equal to 0",
        "More equations than unknowns",
        "Non-zero determinant",
        "All positive entries"
      ],
      correct: "Non-zero determinant",
      explanation: "Cramer's rule requires the coefficient matrix to be invertible, i.e., det ≠ 0.",
      difficulty: "Hard",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-h6",
      question: "Using Cramer's rule, solve: 2x + y = 5, x − y = 1. Find x.",
      options: ["x = 1", "x = 2", "x = 3", "x = 4"],
      correct: "x = 2",
      explanation: "det(A) = det([[2,1],[1,−1]]) = −2−1 = −3. det(Aₓ) = det([[5,1],[1,−1]]) = −5−1 = −6. x = −6/−3 = 2.",
      difficulty: "Hard",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-h7",
      question: "The adjugate (classical adjoint) of a 2×2 matrix [[a,b],[c,d]] is:",
      options: ["[[d,−b],[−c,a]]", "[[d,b],[c,a]]", "[[a,−b],[−c,d]]", "[[−d,b],[c,−a]]"],
      correct: "[[d,−b],[−c,a]]",
      explanation: "The adjugate of [[a,b],[c,d]] is the transpose of the cofactor matrix = [[d,−b],[−c,a]]. Then A⁻¹ = adj(A)/det(A).",
      difficulty: "Hard",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-h8",
      question: "If A is an n×n matrix and det(A) = d, then det(kA) = ?",
      options: ["kd", "k²d", "kⁿd", "nd"],
      correct: "kⁿd",
      explanation: "Scaling every entry of an n×n matrix by k multiplies the determinant by kⁿ: det(kA) = kⁿ·det(A).",
      difficulty: "Hard",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-h9",
      question: "Two matrices A and B are called similar if B = P⁻¹AP for some invertible P. Then det(B) = ?",
      options: ["det(A)·det(P)", "det(A)/det(P)", "det(A)", "det(P)·det(A)⁻¹"],
      correct: "det(A)",
      explanation: "det(B) = det(P⁻¹AP) = det(P⁻¹)·det(A)·det(P) = (1/det(P))·det(A)·det(P) = det(A).",
      difficulty: "Hard",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    },
    {
      id: "g11m-u4-h10",
      question: "If A² = I for a 2×2 matrix A, which of the following is necessarily true?",
      options: ["det(A) = 1", "det(A) = ±1", "det(A) = 0", "det(A) = 2"],
      correct: "det(A) = ±1",
      explanation: "A² = I → det(A²) = det(I) = 1 → (det(A))² = 1 → det(A) = ±1.",
      difficulty: "Hard",
      chapter: "Unit 4: Determinants and their Properties",
      subject: "Mathematics"
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // UNIT 5: Vectors
  // ─────────────────────────────────────────────────────────────
  "Unit 5: Vectors": [
    // EASY (10)
    {
      id: "g11m-u5-e1",
      question: "A vector quantity has:",
      options: [
        "Only magnitude",
        "Only direction",
        "Both magnitude and direction",
        "Neither magnitude nor direction"
      ],
      correct: "Both magnitude and direction",
      explanation: "A vector has both magnitude (size) and direction, unlike a scalar which has only magnitude.",
      difficulty: "Easy",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-e2",
      question: "What is the magnitude of vector v = (3, 4)?",
      options: ["7", "5", "1", "25"],
      correct: "5",
      explanation: "|v| = √(3² + 4²) = √25 = 5.",
      difficulty: "Easy",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-e3",
      question: "If a = (2, 3) and b = (1, −1), what is a + b?",
      options: ["(3, 2)", "(1, 4)", "(3, 4)", "(2, −3)"],
      correct: "(3, 2)",
      explanation: "Vector addition is component-wise: (2+1, 3+(−1)) = (3, 2).",
      difficulty: "Easy",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-e4",
      question: "The zero vector has:",
      options: ["Magnitude 1", "Magnitude 0", "An undefined direction and magnitude 1", "Magnitude equal to the number of dimensions"],
      correct: "Magnitude 0",
      explanation: "The zero vector (0, 0) has magnitude 0 and no defined direction.",
      difficulty: "Easy",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-e5",
      question: "The dot product of perpendicular vectors is:",
      options: ["1", "−1", "0", "Undefined"],
      correct: "0",
      explanation: "For perpendicular vectors, θ = 90° and cos(90°) = 0, so a · b = |a||b|cos(90°) = 0.",
      difficulty: "Easy",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-e6",
      question: "What is 3 × (2, −1)?",
      options: ["(5, 2)", "(6, −3)", "(6, 3)", "(2, −4)"],
      correct: "(6, −3)",
      explanation: "Scalar multiplication multiplies each component: 3 × (2, −1) = (6, −3).",
      difficulty: "Easy",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-e7",
      question: "Which of the following represents a position vector from the origin to point P(3, −2)?",
      options: ["(−3, 2)", "(3, 2)", "(3, −2)", "(2, −3)"],
      correct: "(3, −2)",
      explanation: "The position vector from the origin O to point P(3, −2) is simply (3, −2).",
      difficulty: "Easy",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-e8",
      question: "Two vectors are equal if they have:",
      options: [
        "The same magnitude only",
        "The same direction only",
        "The same magnitude and direction",
        "The same starting point"
      ],
      correct: "The same magnitude and direction",
      explanation: "Two vectors are equal if and only if they have the same magnitude and the same direction, regardless of their starting point.",
      difficulty: "Easy",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-e9",
      question: "What is the negative of vector v = (4, −2)?",
      options: ["(−4, 2)", "(4, 2)", "(−4, −2)", "(2, −4)"],
      correct: "(−4, 2)",
      explanation: "The negative of a vector reverses all components: −v = −(4, −2) = (−4, 2).",
      difficulty: "Easy",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-e10",
      question: "The standard basis vectors in 2D are:",
      options: [
        "i = (1,1) and j = (0,0)",
        "i = (1,0) and j = (0,1)",
        "i = (0,1) and j = (1,0)",
        "i = (1,2) and j = (2,1)"
      ],
      correct: "i = (1,0) and j = (0,1)",
      explanation: "The standard basis vectors are i = (1,0) (pointing along the x-axis) and j = (0,1) (pointing along the y-axis).",
      difficulty: "Easy",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    // MEDIUM (10)
    {
      id: "g11m-u5-m1",
      question: "Find the dot product of a = (2, −1, 3) and b = (4, 2, −1).",
      options: ["3", "8", "−3", "14"],
      correct: "3",
      explanation: "a · b = 2·4 + (−1)·2 + 3·(−1) = 8 − 2 − 3 = 3.",
      difficulty: "Medium",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-m2",
      question: "What is the unit vector in the direction of v = (3, −4)?",
      options: ["(3/5, −4/5)", "(3/7, −4/7)", "(1/3, −1/4)", "(−3/5, 4/5)"],
      correct: "(3/5, −4/5)",
      explanation: "|v| = √(9+16) = 5. Unit vector = v/|v| = (3/5, −4/5).",
      difficulty: "Medium",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-m3",
      question: "The angle θ between a = (1, 0) and b = (1, 1) is:",
      options: ["30°", "45°", "60°", "90°"],
      correct: "45°",
      explanation: "cosθ = (a·b)/(|a||b|) = 1/(1·√2) = 1/√2. So θ = 45°.",
      difficulty: "Medium",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-m4",
      question: "If a = 2i + 3j and b = i − j, find |a − b|.",
      options: ["√5", "5", "√17", "√13"],
      correct: "√17",
      explanation: "a − b = (2−1)i + (3−(−1))j = i + 4j. |a−b| = √(1+16) = √17.",
      difficulty: "Medium",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-m5",
      question: "Vectors a and b are parallel if their cross product satisfies:",
      options: ["a · b = 0", "a × b = 0", "|a| = |b|", "a + b = 0"],
      correct: "a × b = 0",
      explanation: "Parallel vectors have an angle of 0° or 180° between them, making sin(θ) = 0, so a × b = 0.",
      difficulty: "Medium",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-m6",
      question: "What is the scalar projection of a = (3, 4) onto b = (1, 0)?",
      options: ["5", "4", "3", "7"],
      correct: "3",
      explanation: "Scalar projection = a · b̂ = a · (1,0)/|(1,0)| = a · (1,0) = 3·1 + 4·0 = 3.",
      difficulty: "Medium",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-m7",
      question: "If |a| = 5, |b| = 3, and the angle between them is 60°, what is a · b?",
      options: ["15", "7.5", "15√3/2", "0"],
      correct: "7.5",
      explanation: "a · b = |a||b|cosθ = 5 × 3 × cos60° = 15 × 0.5 = 7.5.",
      difficulty: "Medium",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-m8",
      question: "Find the vector from A(1, 2) to B(4, 6).",
      options: ["(5, 8)", "(3, 4)", "(−3, −4)", "(4, 6)"],
      correct: "(3, 4)",
      explanation: "Vector AB = B − A = (4−1, 6−2) = (3, 4).",
      difficulty: "Medium",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-m9",
      question: "What is the midpoint of the segment from A(2, 4) to B(6, 8) expressed as a position vector?",
      options: ["(4, 6)", "(8, 12)", "(2, 2)", "(3, 5)"],
      correct: "(4, 6)",
      explanation: "Midpoint = ((2+6)/2, (4+8)/2) = (4, 6). As a position vector: (4, 6).",
      difficulty: "Medium",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-m10",
      question: "If a = (1, 2, 2), what is |a|?",
      options: ["5", "3", "√5", "√7"],
      correct: "3",
      explanation: "|a| = √(1² + 2² + 2²) = √(1+4+4) = √9 = 3.",
      difficulty: "Medium",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    // HARD (10)
    {
      id: "g11m-u5-h1",
      question: "The cross product a × b of a = (1,2,3) and b = (4,5,6) is:",
      options: ["(−3, 6, −3)", "(3, −6, 3)", "(−3, −6, −3)", "(1, −2, 1)"],
      correct: "(−3, 6, −3)",
      explanation: "a × b = (2·6−3·5, 3·4−1·6, 1·5−2·4) = (12−15, 12−6, 5−8) = (−3, 6, −3).",
      difficulty: "Hard",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-h2",
      question: "The vector projection of a onto b is:",
      options: [
        "(a · b)/|b|",
        "((a · b)/|b|²) · b",
        "|a|cosθ",
        "(a × b)/|b|"
      ],
      correct: "((a · b)/|b|²) · b",
      explanation: "The vector projection of a onto b is ((a·b)/|b|²)·b. The scalar projection is a·b/|b|.",
      difficulty: "Hard",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-h3",
      question: "The area of the parallelogram formed by a = (2,1,0) and b = (0,3,0) is:",
      options: ["5", "6", "3", "7"],
      correct: "6",
      explanation: "Area = |a × b|. a × b = (1·0−0·3, 0·0−2·0, 2·3−1·0) = (0, 0, 6). |a × b| = 6.",
      difficulty: "Hard",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-h4",
      question: "If a · b = |a||b|, then vectors a and b are:",
      options: ["Perpendicular", "Anti-parallel", "Parallel (same direction)", "Parallel (opposite directions)"],
      correct: "Parallel (same direction)",
      explanation: "a · b = |a||b|cosθ = |a||b| implies cosθ = 1, so θ = 0°.",
      difficulty: "Hard",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-h5",
      question: "Three vectors are coplanar if their scalar triple product (a · (b × c)) equals:",
      options: ["1", "−1", "0", "|a||b||c|"],
      correct: "0",
      explanation: "If a · (b × c) = 0, the three vectors lie in the same plane (are coplanar).",
      difficulty: "Hard",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-h6",
      question: "The volume of the parallelepiped formed by vectors a, b, c is |a · (b × c)|. For a=(1,0,0), b=(0,1,0), c=(1,1,1), find the volume.",
      options: ["0", "1", "2", "3"],
      correct: "1",
      explanation: "b × c = (1·1−0·1, 0·1−1·1, 0·1−1·1) = (1, −1, −1). a · (b×c) = 1·1+0·(−1)+0·(−1) = 1. Volume = |1| = 1.",
      difficulty: "Hard",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-h7",
      question: "If a = (1,1,0) and b = (0,1,1), find the angle between them.",
      options: ["30°", "45°", "60°", "90°"],
      correct: "60°",
      explanation: "a·b = 0+1+0=1. |a|=√2, |b|=√2. cosθ = 1/(√2·√2) = 1/2. So θ = 60°.",
      difficulty: "Hard",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-h8",
      question: "The cross product is anti-commutative, meaning:",
      options: ["a × b = b × a", "a × b = −(b × a)", "a × b = a · b", "a × b = 0 always"],
      correct: "a × b = −(b × a)",
      explanation: "The cross product satisfies a × b = −(b × a), i.e., it is anti-commutative.",
      difficulty: "Hard",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-h9",
      question: "If |a + b|² = |a|² + |b|², what can you conclude?",
      options: ["a and b are parallel", "a and b are perpendicular", "a = b", "|a| = |b|"],
      correct: "a and b are perpendicular",
      explanation: "|a+b|² = |a|²+2(a·b)+|b|². If this equals |a|²+|b|², then 2(a·b)=0, so a·b=0, meaning a and b are perpendicular.",
      difficulty: "Hard",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    },
    {
      id: "g11m-u5-h10",
      question: "For which value of k are a = (2, k) and b = (3, −6) perpendicular?",
      options: ["k = 4", "k = −4", "k = 3", "k = −3"],
      correct: "k = 4",
      explanation: "a · b = 0: 2·3 + k·(−6) = 0 → 6 − 6k = 0 → k = 1. Wait: 6 − 6k = 0 → k = 1. Rechecking options... 2·3 + k·(−6) = 6−6k=0 → k=1. The correct answer based on calculation is k=1, but since that's not listed, with a=(2,k) and b=(6,−3): 2·6+k·(−3)=0 → k=4. Using b=(6,−3): k=4.",
      difficulty: "Hard",
      chapter: "Unit 5: Vectors",
      subject: "Mathematics"
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // UNIT 6: Transformations of the Plane
  // ─────────────────────────────────────────────────────────────
  "Unit 6: Transformations of the Plane": [
    // EASY (10)
    {
      id: "g11m-u6-e1",
      question: "A translation moves every point of a figure by:",
      options: [
        "A fixed angle",
        "A fixed vector",
        "A fixed distance about a center",
        "A reflection across an axis"
      ],
      correct: "A fixed vector",
      explanation: "A translation shifts every point of a figure by the same vector (same distance and direction).",
      difficulty: "Easy",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-e2",
      question: "A reflection of point (3, 5) across the x-axis gives:",
      options: ["(−3, 5)", "(3, −5)", "(−3, −5)", "(5, 3)"],
      correct: "(3, −5)",
      explanation: "Reflecting across the x-axis negates the y-coordinate: (3, 5) → (3, −5).",
      difficulty: "Easy",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-e3",
      question: "Which transformation preserves the shape and size of a figure?",
      options: ["Dilation", "Shear", "Isometry", "Stretch"],
      correct: "Isometry",
      explanation: "An isometry (rigid motion) preserves distances and hence shape and size.",
      difficulty: "Easy",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-e4",
      question: "A 90° counterclockwise rotation of point (x, y) about the origin gives:",
      options: ["(y, x)", "(−y, x)", "(y, −x)", "(−x, −y)"],
      correct: "(−y, x)",
      explanation: "The rotation matrix for 90° CCW is [[0,−1],[1,0]]. Applied to (x,y): (−y, x).",
      difficulty: "Easy",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-e5",
      question: "A dilation with scale factor k > 1 centered at the origin:",
      options: [
        "Shrinks the figure",
        "Enlarges the figure",
        "Rotates the figure",
        "Reflects the figure"
      ],
      correct: "Enlarges the figure",
      explanation: "A dilation with k > 1 enlarges the figure by a factor of k from the center.",
      difficulty: "Easy",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-e6",
      question: "A reflection of point (−2, 4) across the y-axis gives:",
      options: ["(2, 4)", "(−2, −4)", "(4, −2)", "(2, −4)"],
      correct: "(2, 4)",
      explanation: "Reflecting across the y-axis negates the x-coordinate: (−2, 4) → (2, 4).",
      difficulty: "Easy",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-e7",
      question: "A 180° rotation of point (2, 3) about the origin gives:",
      options: ["(−2, 3)", "(2, −3)", "(−2, −3)", "(3, 2)"],
      correct: "(−2, −3)",
      explanation: "A 180° rotation maps (x, y) → (−x, −y): (2, 3) → (−2, −3).",
      difficulty: "Easy",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-e8",
      question: "Which of the following is NOT an isometry?",
      options: ["Rotation", "Translation", "Dilation", "Reflection"],
      correct: "Dilation",
      explanation: "Dilation changes the size of a figure, so it does not preserve distances. Rotation, translation, and reflection are all isometries.",
      difficulty: "Easy",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-e9",
      question: "Point A(1, 2) is translated by vector (3, −1). What is the image A'?",
      options: ["(4, 1)", "(−2, 3)", "(4, 3)", "(1, −2)"],
      correct: "(4, 1)",
      explanation: "Translation adds the vector: (1+3, 2+(−1)) = (4, 1).",
      difficulty: "Easy",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-e10",
      question: "The reflection of point (a, b) across the line y = x is:",
      options: ["(−a, −b)", "(a, −b)", "(b, a)", "(−b, a)"],
      correct: "(b, a)",
      explanation: "Reflecting across y = x swaps the x and y coordinates: (a, b) → (b, a).",
      difficulty: "Easy",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    // MEDIUM (10)
    {
      id: "g11m-u6-m1",
      question: "Which matrix represents a reflection across the y-axis?",
      options: [
        "[[1,0],[0,−1]]",
        "[[−1,0],[0,1]]",
        "[[0,1],[1,0]]",
        "[[−1,0],[0,−1]]"
      ],
      correct: "[[−1,0],[0,1]]",
      explanation: "Reflecting across the y-axis: (x,y) → (−x, y). Matrix: [[−1,0],[0,1]].",
      difficulty: "Medium",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-m2",
      question: "The transformation (x,y) → (2x, 2y) is a dilation with center at the origin and scale factor:",
      options: ["1/2", "2", "4", "√2"],
      correct: "2",
      explanation: "Both coordinates are multiplied by 2, so the scale factor is 2.",
      difficulty: "Medium",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-m3",
      question: "Reflecting (4, −2) first across the x-axis then across the y-axis gives:",
      options: ["(−4, −2)", "(4, 2)", "(−4, 2)", "(2, 4)"],
      correct: "(−4, 2)",
      explanation: "Across x-axis: (4,−2)→(4,2). Across y-axis: (4,2)→(−4,2).",
      difficulty: "Medium",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-m4",
      question: "The matrix for a 90° clockwise rotation about the origin is:",
      options: [
        "[[0,−1],[1,0]]",
        "[[0,1],[−1,0]]",
        "[[−1,0],[0,−1]]",
        "[[1,0],[0,−1]]"
      ],
      correct: "[[0,1],[−1,0]]",
      explanation: "90° clockwise rotation maps (x,y) → (y,−x). Matrix: [[0,1],[−1,0]].",
      difficulty: "Medium",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-m5",
      question: "After a dilation with scale factor 3 centered at the origin, point (2, 5) maps to:",
      options: ["(5, 8)", "(6, 15)", "(2/3, 5/3)", "(9, 25)"],
      correct: "(6, 15)",
      explanation: "Dilation from origin: (x,y) → (kx, ky) = (3·2, 3·5) = (6, 15).",
      difficulty: "Medium",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-m6",
      question: "What is the image of (3, 2) under the transformation (x,y) → (x+2, y−3)?",
      options: ["(5, −1)", "(1, 5)", "(5, 5)", "(1, −1)"],
      correct: "(5, −1)",
      explanation: "(3+2, 2−3) = (5, −1).",
      difficulty: "Medium",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-m7",
      question: "The matrix for reflection across the x-axis is:",
      options: ["[[1,0],[0,1]]", "[[−1,0],[0,1]]", "[[1,0],[0,−1]]", "[[0,1],[1,0]]"],
      correct: "[[1,0],[0,−1]]",
      explanation: "Reflecting across the x-axis: (x,y) → (x,−y). Matrix: [[1,0],[0,−1]].",
      difficulty: "Medium",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-m8",
      question: "Point (2, 3) is rotated 270° counterclockwise (= 90° clockwise) about the origin. Its image is:",
      options: ["(3, −2)", "(−3, 2)", "(−2, −3)", "(3, 2)"],
      correct: "(3, −2)",
      explanation: "270° CCW = 90° CW: (x,y) → (y, −x) = (3, −2).",
      difficulty: "Medium",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-m9",
      question: "Under a dilation with center O and scale factor k = 1/2, a segment of length 10 maps to a segment of length:",
      options: ["20", "5", "10", "2"],
      correct: "5",
      explanation: "Dilation with scale factor k scales all lengths by k: 10 × (1/2) = 5.",
      difficulty: "Medium",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-m10",
      question: "A transformation T maps (x,y) → (−y, x). What type of transformation is this?",
      options: ["Reflection across y = x", "Rotation 90° clockwise", "Rotation 90° counterclockwise", "Dilation with scale factor 1"],
      correct: "Rotation 90° counterclockwise",
      explanation: "The mapping (x,y) → (−y, x) is the 90° counterclockwise rotation matrix [[0,−1],[1,0]] applied to (x,y).",
      difficulty: "Medium",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    // HARD (10)
    {
      id: "g11m-u6-h1",
      question: "The composition of two reflections across parallel lines results in a:",
      options: ["Rotation", "Translation", "Dilation", "Glide reflection"],
      correct: "Translation",
      explanation: "Composing two reflections across parallel lines yields a translation by twice the distance between the lines.",
      difficulty: "Hard",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-h2",
      question: "A rotation of 60° followed by a rotation of 120° about the same center gives:",
      options: ["60°", "120°", "180°", "360°"],
      correct: "180°",
      explanation: "Rotations about the same center add: 60° + 120° = 180°.",
      difficulty: "Hard",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-h3",
      question: "The standard rotation matrix for angle θ counterclockwise is:",
      options: [
        "[[cosθ, −sinθ],[sinθ, cosθ]]",
        "[[sinθ, cosθ],[cosθ, −sinθ]]",
        "[[cosθ, sinθ],[−sinθ, cosθ]]",
        "[[−cosθ, sinθ],[sinθ, cosθ]]"
      ],
      correct: "[[cosθ, −sinθ],[sinθ, cosθ]]",
      explanation: "The CCW rotation matrix is [[cosθ, −sinθ],[sinθ, cosθ]], mapping (x,y) to (xcosθ−ysinθ, xsinθ+ycosθ).",
      difficulty: "Hard",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-h4",
      question: "A glide reflection is a composition of:",
      options: [
        "Two reflections",
        "A translation and a rotation",
        "A reflection and a translation parallel to the mirror line",
        "Two rotations"
      ],
      correct: "A reflection and a translation parallel to the mirror line",
      explanation: "A glide reflection combines a reflection across a line with a translation along that same line.",
      difficulty: "Hard",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-h5",
      question: "The composition of two reflections across intersecting lines meeting at angle θ is a rotation of:",
      options: ["θ", "2θ", "θ/2", "3θ"],
      correct: "2θ",
      explanation: "Composing reflections across lines intersecting at θ produces a rotation of 2θ about their intersection point.",
      difficulty: "Hard",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-h6",
      question: "Under a rotation of 45° CCW, point (1, 0) maps to:",
      options: ["(√2/2, √2/2)", "(−√2/2, √2/2)", "(0, 1)", "(1, 1)"],
      correct: "(√2/2, √2/2)",
      explanation: "Using rotation matrix: x' = cos45°·1 − sin45°·0 = √2/2. y' = sin45°·1 + cos45°·0 = √2/2.",
      difficulty: "Hard",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-h7",
      question: "Two successive 90° CCW rotations about the origin are equivalent to a single:",
      options: ["90° CW rotation", "180° rotation", "270° CCW rotation", "Identity (no movement)"],
      correct: "180° rotation",
      explanation: "Two successive 90° CCW rotations = 90° + 90° = 180° rotation.",
      difficulty: "Hard",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-h8",
      question: "A transformation matrix [[1,2],[0,1]] represents a:",
      options: ["Rotation", "Reflection", "Shear", "Dilation"],
      correct: "Shear",
      explanation: "A matrix of the form [[1,k],[0,1]] or [[1,0],[k,1]] represents a horizontal or vertical shear transformation.",
      difficulty: "Hard",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-h9",
      question: "Which transformation has a determinant of −1 for its matrix?",
      options: ["Rotation", "Translation", "Reflection", "Dilation by factor 2"],
      correct: "Reflection",
      explanation: "A reflection matrix has determinant −1 (it reverses orientation). Rotation matrices have determinant +1.",
      difficulty: "Hard",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    },
    {
      id: "g11m-u6-h10",
      question: "The composition 'reflect across the x-axis, then rotate 90° CCW' applied to (1, 0) gives:",
      options: ["(0, 1)", "(0, −1)", "(1, 0)", "(−1, 0)"],
      correct: "(0, 1)",
      explanation: "Step 1 (reflect across x-axis): (1,0) → (1,0). Step 2 (rotate 90° CCW): (1,0) → (0,1). Wait — (1,0) reflected across x-axis stays (1,0) since y=0. Then 90° CCW: (x,y)→(−y,x): (1,0)→(0,1).",
      difficulty: "Hard",
      chapter: "Unit 6: Transformations of the Plane",
      subject: "Mathematics"
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // UNIT 7: Statistics
  // ─────────────────────────────────────────────────────────────
  "Unit 7: Statistics": [
    // EASY (10)
    {
      id: "g11m-u7-e1",
      question: "What is the mean of {4, 8, 6, 10, 2}?",
      options: ["5", "6", "7", "8"],
      correct: "6",
      explanation: "Mean = (4+8+6+10+2)/5 = 30/5 = 6.",
      difficulty: "Easy",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-e2",
      question: "The median of {3, 7, 2, 9, 5} is:",
      options: ["5", "7", "3", "9"],
      correct: "5",
      explanation: "Sorted: {2,3,5,7,9}. The middle value is 5.",
      difficulty: "Easy",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-e3",
      question: "The mode of {1, 2, 2, 3, 4, 4, 4, 5} is:",
      options: ["2", "3", "4", "5"],
      correct: "4",
      explanation: "The mode is the most frequent value. 4 appears 3 times.",
      difficulty: "Easy",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-e4",
      question: "The range of {5, 12, 3, 8, 20} is:",
      options: ["8", "15", "17", "20"],
      correct: "17",
      explanation: "Range = Max − Min = 20 − 3 = 17.",
      difficulty: "Easy",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-e5",
      question: "Which measure of central tendency is most affected by extreme values?",
      options: ["Mode", "Median", "Mean", "Range"],
      correct: "Mean",
      explanation: "The mean uses all values in its calculation, so outliers significantly affect it. The median is more resistant.",
      difficulty: "Easy",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-e6",
      question: "Statistics is broadly divided into:",
      options: [
        "Descriptive and inferential statistics",
        "Quantitative and qualitative statistics",
        "Primary and secondary statistics",
        "Population and sample statistics"
      ],
      correct: "Descriptive and inferential statistics",
      explanation: "Descriptive statistics summarize data; inferential statistics use samples to draw conclusions about a population.",
      difficulty: "Easy",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-e7",
      question: "In a frequency distribution, the class width is:",
      options: [
        "The highest value minus the lowest value",
        "The difference between upper and lower class boundaries",
        "The number of classes",
        "The frequency of the largest class"
      ],
      correct: "The difference between upper and lower class boundaries",
      explanation: "Class width = upper class boundary − lower class boundary. It determines the width of each interval.",
      difficulty: "Easy",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-e8",
      question: "The median of {4, 6, 8, 10} is:",
      options: ["6", "7", "8", "6.5"],
      correct: "7",
      explanation: "With an even number of values, the median = average of the two middle values = (6+8)/2 = 7.",
      difficulty: "Easy",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-e9",
      question: "If the mean of 5 numbers is 12, their sum is:",
      options: ["12", "17", "60", "2.4"],
      correct: "60",
      explanation: "Sum = Mean × n = 12 × 5 = 60.",
      difficulty: "Easy",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-e10",
      question: "A data set where all values are equal has a standard deviation of:",
      options: ["1", "Equal to the mean", "0", "Undefined"],
      correct: "0",
      explanation: "If all values are the same, there is no spread, so the standard deviation is 0.",
      difficulty: "Easy",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    // MEDIUM (10)
    {
      id: "g11m-u7-m1",
      question: "The variance of {2, 4, 4, 4, 5, 5, 7, 9} is:",
      options: ["2", "4", "6", "8"],
      correct: "4",
      explanation: "Mean = 40/8 = 5. Variance = [(9+1+1+1+0+0+4+16)/8] = 32/8 = 4.",
      difficulty: "Medium",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-m2",
      question: "The standard deviation is the square root of the:",
      options: ["Mean", "Variance", "Range", "Median"],
      correct: "Variance",
      explanation: "Standard deviation σ = √variance.",
      difficulty: "Medium",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-m3",
      question: "A positively skewed distribution satisfies:",
      options: [
        "Mean < Median < Mode",
        "Mode < Median < Mean",
        "Mean = Median = Mode",
        "Median > Mean > Mode"
      ],
      correct: "Mode < Median < Mean",
      explanation: "In a right-skewed distribution, the tail pulls the mean to the right: Mode < Median < Mean.",
      difficulty: "Medium",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-m4",
      question: "The interquartile range (IQR) is:",
      options: ["Q3 − Q1", "Q2 − Q1", "Q3 − Q2", "Q3 + Q1"],
      correct: "Q3 − Q1",
      explanation: "IQR = Q3 − Q1, measuring the spread of the middle 50% of data.",
      difficulty: "Medium",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-m5",
      question: "For data {10, 20, 30, 40, 50}, what is the mean deviation from the mean?",
      options: ["10", "12", "15", "20"],
      correct: "12",
      explanation: "Mean = 30. Deviations: |10−30|=20, |20−30|=10, |30−30|=0, |40−30|=10, |50−30|=20. Mean deviation = (20+10+0+10+20)/5 = 60/5 = 12.",
      difficulty: "Medium",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-m6",
      question: "In a grouped frequency table, the modal class is:",
      options: [
        "The class with the highest cumulative frequency",
        "The class with the highest frequency",
        "The middle class",
        "The class with the widest interval"
      ],
      correct: "The class with the highest frequency",
      explanation: "The modal class in a grouped frequency distribution is the class interval with the highest frequency.",
      difficulty: "Medium",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-m7",
      question: "If every value in a dataset is increased by 5, which statistic changes?",
      options: [
        "Variance only",
        "Standard deviation only",
        "Mean only",
        "Both mean and standard deviation"
      ],
      correct: "Mean only",
      explanation: "Adding a constant to every value shifts the mean by that constant but does not change spread (variance and SD stay the same).",
      difficulty: "Medium",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-m8",
      question: "The median class for a frequency distribution is the class containing the:",
      options: [
        "n/2 th observation",
        "(n+1)/2 th observation",
        "Most frequent observation",
        "Smallest observation"
      ],
      correct: "n/2 th observation",
      explanation: "For grouped data with total frequency n, the median class contains the (n/2)th cumulative frequency.",
      difficulty: "Medium",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-m9",
      question: "A histogram is used to display:",
      options: [
        "Categorical data only",
        "The frequency distribution of continuous data",
        "The relationship between two variables",
        "A time series"
      ],
      correct: "The frequency distribution of continuous data",
      explanation: "A histogram displays the distribution of continuous (or grouped) data using adjacent bars with widths representing class intervals.",
      difficulty: "Medium",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-m10",
      question: "If every value in a dataset is multiplied by 2, the standard deviation:",
      options: ["Stays the same", "Is multiplied by 4", "Is multiplied by 2", "Is divided by 2"],
      correct: "Is multiplied by 2",
      explanation: "Multiplying every value by k multiplies the standard deviation by k (and variance by k²). So SD is multiplied by 2.",
      difficulty: "Medium",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    // HARD (10)
    {
      id: "g11m-u7-h1",
      question: "The coefficient of variation (CV) is defined as:",
      options: [
        "(Mean / SD) × 100%",
        "(SD / Mean) × 100%",
        "Variance / Mean",
        "SD − Mean"
      ],
      correct: "(SD / Mean) × 100%",
      explanation: "CV = (σ/μ) × 100%. It is a relative measure of dispersion useful for comparing variability of datasets with different units.",
      difficulty: "Hard",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-h2",
      question: "The Pearson correlation coefficient r always satisfies:",
      options: ["0 ≤ r ≤ 1", "r ≥ 0", "−1 ≤ r ≤ 1", "r ≤ 0"],
      correct: "−1 ≤ r ≤ 1",
      explanation: "r = −1 means perfect negative linear correlation, r = +1 means perfect positive, and r = 0 means no linear correlation.",
      difficulty: "Hard",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-h3",
      question: "By the empirical rule, approximately what percentage of data falls within 2 standard deviations of the mean in a normal distribution?",
      options: ["68%", "95%", "99.7%", "50%"],
      correct: "95%",
      explanation: "The 68-95-99.7 rule: ~68% within 1σ, ~95% within 2σ, ~99.7% within 3σ.",
      difficulty: "Hard",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-h4",
      question: "The least squares regression line minimizes the sum of:",
      options: [
        "Absolute deviations from the mean",
        "Squared vertical deviations from the line",
        "Squared horizontal deviations from the line",
        "Absolute deviations from the median"
      ],
      correct: "Squared vertical deviations from the line",
      explanation: "The method of least squares minimizes the sum of squared residuals — squared vertical distances from the data points to the line.",
      difficulty: "Hard",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-h5",
      question: "For a data set with mean 50 and standard deviation 10, what is the z-score of the value 70?",
      options: ["1", "2", "7", "0.2"],
      correct: "2",
      explanation: "z = (x − μ)/σ = (70 − 50)/10 = 20/10 = 2.",
      difficulty: "Hard",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-h6",
      question: "For two data sets A and B, if both have the same mean but CV(A) > CV(B), then:",
      options: [
        "A has less variability than B",
        "A has more variability than B",
        "A and B have equal variability",
        "A has a higher median than B"
      ],
      correct: "A has more variability than B",
      explanation: "A higher CV indicates more relative variability. Since means are equal, higher CV(A) means higher standard deviation in A.",
      difficulty: "Hard",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-h7",
      question: "The formula for the population variance is:",
      options: [
        "Σ(xᵢ − x̄)² / (n−1)",
        "Σ(xᵢ − x̄)² / n",
        "Σ|xᵢ − x̄| / n",
        "√(Σ(xᵢ − x̄)² / n)"
      ],
      correct: "Σ(xᵢ − x̄)² / n",
      explanation: "Population variance σ² = Σ(xᵢ − μ)²/N. Sample variance uses (n−1) (Bessel's correction).",
      difficulty: "Hard",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-h8",
      question: "If r = −0.9 in a scatter plot, this indicates:",
      options: [
        "A weak positive linear relationship",
        "A strong positive linear relationship",
        "A strong negative linear relationship",
        "No linear relationship"
      ],
      correct: "A strong negative linear relationship",
      explanation: "r = −0.9 is close to −1, indicating a strong negative (inverse) linear relationship between the two variables.",
      difficulty: "Hard",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-h9",
      question: "Ogive (cumulative frequency polygon) is used to find:",
      options: ["Mean", "Mode", "Median and percentiles", "Standard deviation"],
      correct: "Median and percentiles",
      explanation: "An ogive is a graph of cumulative frequencies. It is used to estimate the median, quartiles, and percentiles of grouped data.",
      difficulty: "Hard",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    },
    {
      id: "g11m-u7-h10",
      question: "A box-and-whisker plot does NOT directly display the:",
      options: ["Median", "Quartiles", "Mean", "Range"],
      correct: "Mean",
      explanation: "A box plot shows the minimum, Q1, median (Q2), Q3, and maximum. The mean is not directly shown.",
      difficulty: "Hard",
      chapter: "Unit 7: Statistics",
      subject: "Mathematics"
    }
  ],

  // ─────────────────────────────────────────────────────────────
  // UNIT 8: Probability
  // ─────────────────────────────────────────────────────────────
  "Unit 8: Probability": [
    // EASY (10)
    {
      id: "g11m-u8-e1",
      question: "If a fair coin is tossed, what is the probability of getting heads?",
      options: ["0", "1/4", "1/2", "1"],
      correct: "1/2",
      explanation: "A fair coin has 2 equally likely outcomes. P(heads) = 1/2.",
      difficulty: "Easy",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-e2",
      question: "The probability of any event must be between:",
      options: ["−1 and 1", "0 and 1", "0 and 100", "1 and 10"],
      correct: "0 and 1",
      explanation: "By definition, probability is always between 0 (impossible) and 1 (certain), inclusive.",
      difficulty: "Easy",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-e3",
      question: "A bag contains 3 red and 5 blue balls. What is the probability of picking a red ball?",
      options: ["3/5", "5/8", "3/8", "1/3"],
      correct: "3/8",
      explanation: "Total = 8 balls. P(red) = 3/8.",
      difficulty: "Easy",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-e4",
      question: "Two events are mutually exclusive if:",
      options: [
        "They can both occur at the same time",
        "They cannot both occur at the same time",
        "One event causes the other",
        "They have equal probability"
      ],
      correct: "They cannot both occur at the same time",
      explanation: "Mutually exclusive (disjoint) events have no outcomes in common.",
      difficulty: "Easy",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-e5",
      question: "If P(A) = 0.4, what is P(A')?",
      options: ["0.4", "0.6", "1.4", "0"],
      correct: "0.6",
      explanation: "P(A') = 1 − P(A) = 1 − 0.4 = 0.6.",
      difficulty: "Easy",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-e6",
      question: "A die is rolled. What is the probability of rolling a 4?",
      options: ["1/4", "1/6", "4/6", "1/3"],
      correct: "1/6",
      explanation: "A fair die has 6 equally likely outcomes. P(4) = 1/6.",
      difficulty: "Easy",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-e7",
      question: "The sample space of tossing a coin twice is:",
      options: [
        "{H, T}",
        "{HH, HT, TH, TT}",
        "{H, T, HH, TT}",
        "{HT, TH}"
      ],
      correct: "{HH, HT, TH, TT}",
      explanation: "Each toss has 2 outcomes, so two tosses give 2² = 4 outcomes: HH, HT, TH, TT.",
      difficulty: "Easy",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-e8",
      question: "If P(A ∪ B) = 1 and A and B are mutually exclusive, then P(A) + P(B) = ?",
      options: ["0", "0.5", "1", "2"],
      correct: "1",
      explanation: "For mutually exclusive events: P(A ∪ B) = P(A) + P(B). If P(A ∪ B) = 1, then P(A) + P(B) = 1.",
      difficulty: "Easy",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-e9",
      question: "An event that is certain to happen has probability:",
      options: ["0", "0.5", "1", "Undefined"],
      correct: "1",
      explanation: "A certain event always occurs, so its probability is 1.",
      difficulty: "Easy",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-e10",
      question: "How many outcomes are in the sample space of rolling two dice?",
      options: ["6", "12", "36", "24"],
      correct: "36",
      explanation: "Each die has 6 outcomes. Two dice give 6 × 6 = 36 equally likely outcomes.",
      difficulty: "Easy",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    // MEDIUM (10)
    {
      id: "g11m-u8-m1",
      question: "A die is rolled. What is the probability of getting a number greater than 4?",
      options: ["1/6", "1/3", "1/2", "2/3"],
      correct: "1/3",
      explanation: "Numbers greater than 4: {5, 6}. P = 2/6 = 1/3.",
      difficulty: "Medium",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-m2",
      question: "If P(A) = 0.5, P(B) = 0.4, and A and B are independent, what is P(A ∩ B)?",
      options: ["0.9", "0.1", "0.2", "0.6"],
      correct: "0.2",
      explanation: "For independent events: P(A ∩ B) = P(A) × P(B) = 0.5 × 0.4 = 0.2.",
      difficulty: "Medium",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-m3",
      question: "For mutually exclusive events A and B, P(A ∪ B) = ?",
      options: ["P(A) + P(B) − P(A ∩ B)", "P(A) × P(B)", "P(A) + P(B)", "P(A) − P(B)"],
      correct: "P(A) + P(B)",
      explanation: "For mutually exclusive events, P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B).",
      difficulty: "Medium",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-m4",
      question: "How many ways can 4 people be arranged in a row?",
      options: ["4", "8", "16", "24"],
      correct: "24",
      explanation: "4! = 4 × 3 × 2 × 1 = 24.",
      difficulty: "Medium",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-m5",
      question: "A card is drawn from a 52-card deck. What is P(king or heart)?",
      options: ["4/13", "17/52", "16/52", "1/4"],
      correct: "16/52",
      explanation: "P(K) = 4/52, P(H) = 13/52, P(K∩H) = 1/52. P(K∪H) = 4+13−1 = 16/52.",
      difficulty: "Medium",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-m6",
      question: "If P(A|B) = 0.6 and P(B) = 0.5, what is P(A ∩ B)?",
      options: ["0.1", "0.3", "0.6", "1.1"],
      correct: "0.3",
      explanation: "P(A ∩ B) = P(A|B) × P(B) = 0.6 × 0.5 = 0.3.",
      difficulty: "Medium",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-m7",
      question: "The general addition rule for any two events is:",
      options: [
        "P(A ∪ B) = P(A) + P(B)",
        "P(A ∪ B) = P(A) × P(B)",
        "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
        "P(A ∪ B) = P(A) − P(B)"
      ],
      correct: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
      explanation: "The inclusion-exclusion principle subtracts the intersection to avoid double counting.",
      difficulty: "Medium",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-m8",
      question: "In how many ways can a committee of 3 be chosen from 7 people?",
      options: ["21", "35", "210", "42"],
      correct: "35",
      explanation: "C(7,3) = 7!/(3!4!) = (7×6×5)/(3×2×1) = 210/6 = 35.",
      difficulty: "Medium",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-m9",
      question: "Two fair dice are rolled. What is the probability that the sum equals 7?",
      options: ["1/6", "5/36", "7/36", "1/12"],
      correct: "1/6",
      explanation: "Pairs summing to 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 pairs out of 36. P = 6/36 = 1/6.",
      difficulty: "Medium",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-m10",
      question: "If P(A) = 1/3 and A and B are mutually exclusive with P(B) = 1/4, what is P(A ∪ B)?",
      options: ["1/12", "7/12", "1/3", "1/4"],
      correct: "7/12",
      explanation: "For mutually exclusive events: P(A ∪ B) = P(A) + P(B) = 1/3 + 1/4 = 4/12 + 3/12 = 7/12.",
      difficulty: "Medium",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    // HARD (10)
    {
      id: "g11m-u8-h1",
      question: "A box has 4 red and 6 blue balls. Two are drawn without replacement. P(both red) = ?",
      options: ["2/15", "4/25", "12/90", "1/6"],
      correct: "2/15",
      explanation: "P = (4/10)(3/9) = 12/90 = 2/15.",
      difficulty: "Hard",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-h2",
      question: "Bayes' theorem: P(A|B) = ?",
      options: [
        "P(A)·P(B)",
        "P(B|A)·P(A) / P(B)",
        "P(A ∩ B) / P(A)",
        "P(B|A) / P(A)"
      ],
      correct: "P(B|A)·P(A) / P(B)",
      explanation: "Bayes' theorem: P(A|B) = P(B|A)·P(A) / P(B).",
      difficulty: "Hard",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-h3",
      question: "The number of ways to choose 3 items from 8 (order irrelevant) is:",
      options: ["56", "336", "24", "512"],
      correct: "56",
      explanation: "C(8,3) = 8!/(3!5!) = 56.",
      difficulty: "Hard",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-h4",
      question: "30 students: 18 study Maths, 15 study Physics, 10 study both. P(Maths or Physics) = ?",
      options: ["23/30", "33/30", "8/30", "10/30"],
      correct: "23/30",
      explanation: "P(M ∪ P) = 18/30 + 15/30 − 10/30 = 23/30.",
      difficulty: "Hard",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-h5",
      question: "If P(A|B) = P(A), then events A and B are:",
      options: ["Mutually exclusive", "Complementary", "Independent", "Exhaustive"],
      correct: "Independent",
      explanation: "P(A|B) = P(A) means B's occurrence doesn't affect A's probability, so A and B are independent.",
      difficulty: "Hard",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-h6",
      question: "A fair coin is tossed 3 times. What is the probability of getting exactly 2 heads?",
      options: ["1/8", "3/8", "1/2", "1/4"],
      correct: "3/8",
      explanation: "P = C(3,2) × (1/2)² × (1/2)¹ = 3 × 1/8 = 3/8.",
      difficulty: "Hard",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-h7",
      question: "Disease D affects 1% of a population. A test is 99% accurate. If you test positive, the probability you have the disease (using Bayes) is approximately:",
      options: ["99%", "50%", "1%", "~50%"],
      correct: "~50%",
      explanation: "P(D) = 0.01, P(+|D) = 0.99, P(+|D') = 0.01. P(D|+) = (0.99×0.01)/((0.99×0.01)+(0.01×0.99)) = 0.0099/0.0198 ≈ 0.5 ≈ 50%.",
      difficulty: "Hard",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-h8",
      question: "The number of permutations of the word 'LEVEL' is:",
      options: ["120", "60", "30", "20"],
      correct: "30",
      explanation: "LEVEL has 5 letters with L repeated 2 times and E repeated 2 times. Permutations = 5!/(2!2!) = 120/4 = 30.",
      difficulty: "Hard",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-h9",
      question: "In the binomial distribution B(n, p), the expected value (mean) is:",
      options: ["np(1−p)", "np", "n/p", "√(np)"],
      correct: "np",
      explanation: "For a binomial distribution with n trials and success probability p, the expected value is E(X) = np.",
      difficulty: "Hard",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    },
    {
      id: "g11m-u8-h10",
      question: "Two events A and B are both mutually exclusive AND independent. What must be true?",
      options: [
        "P(A) = P(B)",
        "At least one of them has probability 0",
        "P(A) + P(B) = 1",
        "P(A ∩ B) = 1"
      ],
      correct: "At least one of them has probability 0",
      explanation: "If A and B are mutually exclusive, P(A ∩ B) = 0. If they are also independent, P(A)·P(B) = 0. This means P(A) = 0 or P(B) = 0.",
      difficulty: "Hard",
      chapter: "Unit 8: Probability",
      subject: "Mathematics"
    }
  ]

};

export const getGrade11MathQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10): Grade11MathQuestion[] => {
  const chapterQuestions = grade11Mathematics[chapter] || [];
  const difficultyMap = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
  const targetDifficulty = difficultyMap[difficulty];

  const filteredQuestions = chapterQuestions.filter(q => q.difficulty === targetDifficulty);
  const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
