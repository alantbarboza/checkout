-- AddForeignKey
ALTER TABLE "valores_atributos" ADD CONSTRAINT "valores_atributos_id_atributo_fkey" FOREIGN KEY ("id_atributo") REFERENCES "atributos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
