import Map from "components/Map";
import React, { useCallback, useState } from "react";
import fa from "app/lib/fa.json";
import useCategoryStore from "app/store";
import { useRouter } from "next/navigation";
import { ReserveRoute } from "app/lib/routes";

const UserPosition: React.FC = () => {
  const router = useRouter();
  const [parentMarkerPosition, setParentMarkerPosition] = useState<
    [number, number]
  >([0, 0]);

  const setSelectedProductId = useCategoryStore(
    (state) => state.setSelectedProductId
  );
  const setPosition = useCategoryStore((state) => state.setPosition);

  const handleSubmit = () => {
    setPosition(parentMarkerPosition);
    router.push(ReserveRoute());
  };

  const handleSelectProduct = useCallback(
    (id: number | null) => {
      setSelectedProductId(id);
    },
    [setSelectedProductId]
  );

  const handleMarkerPositionChange = (newMarkerPosition: [number, number]) => {
    setParentMarkerPosition(newMarkerPosition);
  };
  return (
    <div className="mt-4">
      <Map onMarkerPositionChange={handleMarkerPositionChange} />

      <div className="flex gap-5 mt-8">
        <button onClick={handleSubmit} className="btn btn-primary flex-1">
          {fa.product.approve}
        </button>
        <button
          onClick={(): void => handleSelectProduct(null)}
          className="btn btn-outline btn-error"
        >
          {fa.product.cancel}
        </button>
      </div>
    </div>
  );
};

export default UserPosition;