export interface Vector2D {
  x: number;
  y: number;
}

export function scale(factor: number, vector: Vector2D): Vector2D {
  return {
    x: factor * vector.x,
    y: factor * vector.y
  }
}

export function add(left: Vector2D, right: Vector2D): Vector2D {
  return {
    x: left.x + right.x,
    y: left.y + right.y
  }
}

export function subtract(left: Vector2D, right: Vector2D): Vector2D {
  return {
    x: left.x - right.x,
    y: left.y - right.y
  }
}

export function length({x, y}: Vector2D): number {
  return Math.sqrt(x * x + y * y);
}

export function distance(from: Vector2D, to: Vector2D): number {
  return length(subtract(to, from))
}

export function normalise(v: Vector2D): Vector2D {
  const vLength = length(v);
  return (vLength === 0)
    ? v
    : scale(1.0 / vLength, v);
}
export const normalize = normalise; // alias

export function magnitude(magnitude: number, v: Vector2D): Vector2D {
  return scale(magnitude, normalize(v));
}

export function limit(maxLength: number, v: Vector2D): Vector2D {
  return length(v) > maxLength ? magnitude(maxLength, v) : v;
}

export function unitDirection(from: Vector2D, to: Vector2D): Vector2D {
  const direction = subtract(to, from);
  return normalise(direction);
}