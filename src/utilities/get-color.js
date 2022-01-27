import { PROJECT_COLORS } from '../constants/project-colors';

export const getColorHEXById = (colorId) => {
  const colorObj = PROJECT_COLORS.find((color) => color.id === colorId);
  return colorObj.colorHEX;
};

export const getColorIdByName = (colorName) => {
  const colorObj = PROJECT_COLORS.find((color) => color.name === colorName);
  return colorObj.id;
};

export const getColorNameById = (colorId) => {
  const colorObj = PROJECT_COLORS.find((color) => color.id === colorId);
  return colorObj.name;
};
