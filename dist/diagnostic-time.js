// Undo restores the captured age of an effect, without replaying elapsed time.
export const shiftTime=(value,delta)=>value===null||!Number.isFinite(value)?value:value+delta;
