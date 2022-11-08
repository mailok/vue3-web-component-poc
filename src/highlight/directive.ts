import type { DirectiveBinding } from "vue";
import type { Directive } from "@vue/runtime-core";

const STATUS = {
  normal: `outline-violet-700`,
  errored: "outline-red-500",
};

const SIZE = {
  xs: `outline-1`,
  sm: `outline-2`,
};

interface Element extends HTMLElement {
  __highlightClasses__: string[];
}

let highlightClass: string[] = [];

export const highlight: Directive = {
  updated(element: Element, binding: DirectiveBinding) {
    (element.__highlightClasses__ || []).forEach((value) => {
      element.classList.remove(value);
    });

    const hover = Boolean(binding.modifiers["hover"]);
    const dashed = binding.arg === "dashed";
    const sm = Boolean(binding.modifiers["sm"]);

    const type = hover ? "hover:outline" : "outline";

    const size = sm ? SIZE.sm : SIZE.xs;

    const color = binding.value === "errored" ? STATUS.errored : STATUS.normal;

    const style =
      hover && dashed
        ? "hover:outline-dashed"
        : !hover && dashed
        ? "outline-dashed"
        : "";

    highlightClass = [type, style, size, color, "outline-offset-2"].filter(
      Boolean
    );
    element.classList.add(...highlightClass);
    element.__highlightClasses__ = highlightClass;
  },
};
