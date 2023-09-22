export function generateBoxShadows(multiplier: number): string {
    if (multiplier <= 0) {
      throw new Error("Multiplier must be greater than 0");
    }
  
    const shadows: string[] = [];
    for (let i = 1; i <= multiplier; i++) {
      const offsetX = i * 2;
      const offsetY = i * 2;
      const blurRadius = i * 2;
      const spreadRadius = i * 1;
      const color = "rgba(0, 0, 0, 0.2)";
  
      const boxShadow = `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`;
      shadows.push(boxShadow);
    }
  
    return shadows.join(", ");
  }