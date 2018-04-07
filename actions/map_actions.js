export const selectSector = sector => ({
  type: "SELECT_SECTOR",
  sector,
});

export const moveSector = sector => ({
  type: "MOVE_SECTOR",
  sector,
});