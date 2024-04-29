import { getTargetWidth } from "$lib/components/Menu/store/fixScale/getTargetWidth";

export const calculateScaleX = (text: string, index: number) => {

	const _targetWidth = getTargetWidth();
	// console.log("🚀 ~ calculateAyahWidth ~ text:", text)
	const span = document.createElement('span');
	span.textContent = text;
	span.style.position = 'absolute';
	span.style.background = '#51548520';
	span.style.top = `${index * 1.75}cm`;
	span.style.left = '0';
	span.style.whiteSpace = 'nowrap';
	document.body.appendChild(span);

	const style = window.getComputedStyle(span);
	const width = style.width;
	const ayahNormalWidth = Number((+width.replace('px', '')));
	const scaleXValue = (_targetWidth / ayahNormalWidth);

	span.setAttribute('calc-scale-x', String(scaleXValue));
	span.setAttribute('calc-diff', `${_targetWidth - ayahNormalWidth}`);

	// try to add the scale and recal again
	span.style.transform = `scaleX(${scaleXValue})`;
	span.style.transformOrigin = `left`;

	document.body.removeChild(span);
	return scaleXValue;
};
