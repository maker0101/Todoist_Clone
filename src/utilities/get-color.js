import { PROJECT_COLORS } from "../constants/project-colors";

export const getColorHEX = (colorId) => {
	const colorObj = PROJECT_COLORS.find((color) => color.id === colorId);
	return colorObj.colorHEX;
};
