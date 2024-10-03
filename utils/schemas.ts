import { z } from "zod";

function validateImageFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, "O tamanho do arquivo deve ser menor que 1MB")
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, "O arquivo deve ser uma imagem");
}

export const imageSchema = z.object({
  image: validateImageFile(),
});
