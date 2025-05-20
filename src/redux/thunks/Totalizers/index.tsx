import { Dispatch } from "redux";
import { TotalizadoresCreators as Creators } from "../../ducks";
import { TotalizadoresData } from "./Models";

export const fetchTotalizadoresThunk = () => {
  return async (dispatch: Dispatch) => {
    dispatch(Creators.request());

    try {
      const response = await fetch(
        "https://utisoftsandbox.appws.com.br/conexao/totalizadores/dadosgerais",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ id: 8 }),
        }
      );

      const contentType = response.headers.get("Content-Type") || "";
      const buffer = await response.arrayBuffer();

      let charset = "utf-8";
      const charsetMatch = contentType.match(/charset=([^;]+)/i);
      if (charsetMatch && charsetMatch[1]) {
        charset = charsetMatch[1].toLowerCase();
      }

      const decoder = new TextDecoder(charset);
      const text = decoder.decode(buffer);

      let decodedText = "";
      try {
        decodedText = decodeURIComponent(text);
      } catch {
        decodedText = text;
      }

      if (!response.ok) {
        throw new Error("Falha ao buscar totalizadores");
      }

      let data: TotalizadoresData;
      try {
        data = JSON.parse(decodedText);
      } catch (parseError) {
        console.error("Erro ao fazer parse do JSON:", parseError);
        throw parseError;
      }

      dispatch(Creators.success(data));
      return { success: true, data };
    } catch (error) {
      dispatch(Creators.failure());
      return { success: false, error };
    }
  };
};
