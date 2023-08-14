window.onload = () =>
{
  let polyGraph = document.getElementById("polyGraph");
  console.log(polyGraph)
  let expCalc = Desmos.GraphingCalculator(polyGraph, {
    expressionsCollapsed: true,
    border: false,
    lockViewport: true,
    settingsMenu: false,
    expressions: false,
  });
  expCalc.setMathBounds({ left: -6, right: 10, bottom: -4, top: 4 });
  expCalc.setExpressions([
    { id: "graph1", latex: "f(x) = (x+4)(x+2)", color: "#5e81ac" },
    // { id: "a", latex: "a=1" },
    {
      id: "label1",
      label: "Quadratic",
      latex: "(a, f(a))",
      color: "#5e81ac",
    },
    {id: "graph2", latex: "g(x) = (x-1)(x-4)(x-6)/4", color:"#2e3440"},
    {id: "b",latex:"a=2" },
    {
        id: "label2",
        label: "3rd degree polynomial",
        latex: "(b, g(b))",
        color: "#2e3440"
    }
  ]);
}