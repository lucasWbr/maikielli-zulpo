"use client";

import React, { useState } from "react";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createSocialMediaCollaboratorAction } from "@/utils/actions";
import SocialMediaInput from "@/components/form/SocialMediaInput";
import Icons from "@/components/global/Icons";
import { Button } from "@/components/ui/button";

function CreateSocialMediaLinkPage() {
  const [socialMediaInputs, setSocialMediaInputs] = useState([{ id: 1 }]);

  const addSocialMediaInput = () => {
    setSocialMediaInputs([
      ...socialMediaInputs,
      { id: socialMediaInputs.length + 1 },
    ]);
  };

  const removeSocialMediaInput = (id: number) => {
    setSocialMediaInputs(socialMediaInputs.filter((input) => input.id !== id));
  };

  return (
    <section className="pb-8">
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Adicionar Rede Social
      </h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createSocialMediaCollaboratorAction}>
          <input
            type="hidden"
            name="id"
            value="ac2bd107-9869-41ee-a82c-18386e31b857"
          />
          <div className="grid gap-4 md:grid-cols-2 my-4">
            {socialMediaInputs.map((input) => (
              <div key={input.id} className="grid grid-cols-12 items-center">
                <div className="col-span-11">
                  <SocialMediaInput
                    type="text"
                    name={`socialMediaSelect${input.id}`}
                    nameUrl={`socialMediaUrl${input.id}`}
                    placeholder="Rede Social"
                    label={`Social Media`}
                    mode="create"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeSocialMediaInput(input.id)}
                  className="text-black place-self-center mt-4 h-9 w-9 col-span-1 flex justify-center items-center"
                >
                  <Icons type="FaMinusCircle" className="h-6 w-6" />
                </button>
              </div>
            ))}
            <Button
              type="button"
              variant={"outline"}
              onClick={addSocialMediaInput}
              className="p-2 bg-transparent text-black rounded flex justify-center gap-4 items-center self-center mt-4"
            >
              <Icons type="FaPlusCircle" className="h-6 w-6" /> Adicionar Outra
              Rede Social
            </Button>
          </div>
          <SubmitButton text="ENVIAR" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateSocialMediaLinkPage;
