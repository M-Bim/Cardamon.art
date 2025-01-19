"use client";

import { Table } from "@medusajs/ui";
import { DigitalProduct } from "../../../../types/global";
import { getDigitalMediaDownloadLink } from "../../../../lib/data/digital-products";
type Props = {
  digitalProducts: DigitalProduct[];
};
const handleDownload = async (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  mediaId: string,
) => {
  e.preventDefault();

  const url = await getDigitalMediaDownloadLink(mediaId);

  window.open(url);
};

export const DigitalProductsList = ({ digitalProducts }: Props) => {
  return (
  <a href="#" onClick={(e) => handleDownload(e, media.id)}>
    Download{showMediaCount ? ` ${index + 1}` : ``}
  </a>
};
