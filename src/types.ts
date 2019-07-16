import { SimulationNodeDatum, SimulationLinkDatum } from "d3";

export namespace d3Types {
  export class d3Node implements SimulationNodeDatum {
    group: number;
    constructor (public id: string, public x: number = 1, public y: number = 2) {}
  }

  export class d3Link implements SimulationLinkDatum<d3Node> {
    value: number;
    constructor (public source: string, public target: string) {}
  }

  export type d3Graph = {
    nodes: d3Node[],
    links: d3Link[]
  };
}
