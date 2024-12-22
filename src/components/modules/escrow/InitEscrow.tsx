import { Bounded } from "@/components/Bounded";
import { WrapperForm } from "@/components/Wrappers";
import React from "react";
import { InitializeEscrowForm } from "./InitializeEscrowForm";
import { useLoaderStore } from "@/store/utilsStore/store";
import Loader from "@/components/utils/Loader";

interface InitEscrowProps {
  serviceDetails: any;
}

const InitEscrow: React.FC<InitEscrowProps> = ({ serviceDetails }) => {
  const isLoading = useLoaderStore((state) => state.isLoading);

  return (
    <Bounded center={true}>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <WrapperForm>
          <h1 className="text-4xl font-bold">
            Fill in the details of the Escrow
          </h1>
          <h2>
            Fill in the details below to set up a secure and reliable escrow
            agreement.
          </h2>
          <InitializeEscrowForm />
        </WrapperForm>
      )}
    </Bounded>
  );
};

export default InitEscrow;