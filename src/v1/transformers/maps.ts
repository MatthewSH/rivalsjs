import type { AllMapsResponse } from "types/v1";
import { convertToAssetUrl } from "utils";

export function transformAllMapsResponse(data: AllMapsResponse) {
  const transformedData = {
    ...data,
    maps: data.maps.map((map) => ({
      ...map,
      images: map.images.map((image) => convertToAssetUrl(image)),
      subMap: map.subMap
        ? {
            ...map.subMap,
            thumbnail: map.subMap.thumbnail
              ? convertToAssetUrl(map.subMap.thumbnail)
              : null,
          }
        : null,
    })),
  };

  return transformedData;
}
