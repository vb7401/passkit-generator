import Joi from "joi";

export type BarcodeFormat =
	| "PKBarcodeFormatQR"
	| "PKBarcodeFormatPDF417"
	| "PKBarcodeFormatAztec"
	| "PKBarcodeFormatCode128";

export interface Barcode {
	altText?: string;
	messageEncoding?: string;
	format: BarcodeFormat;
	message: string;
}

export const Barcode = Joi.object<Barcode>().keys({
	altText: Joi.string(),
	messageEncoding: Joi.string().default("iso-8859-1"),
	format: Joi.string()
		.required()
		.regex(
			/(PKBarcodeFormatQR|PKBarcodeFormatPDF417|PKBarcodeFormatAztec|PKBarcodeFormatCode128)/,
			"barcodeType",
		),
	message: Joi.string().required(),
});
