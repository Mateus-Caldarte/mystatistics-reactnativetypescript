import { Dispatch } from "redux";
import { ModificarSenhaCreators as Creators } from "../../ducks";

export const fetchModificarSenhaThunk = (
  email: string,
  tokenRecuperarSenha: string,
  novaSenha: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch(Creators.request());

    try {
      const body = {
        email,
        tokenRecuperarSenha,
        novaSenha,
      };

      const response = await fetch(
        "https://utisoftsandbox.appws.com.br/conexao/perfil/modificarSenha",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(body),
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
        throw new Error("Falha ao modificar a senha");
      }

      let data;
      try {
        data = JSON.parse(decodedText);
      } catch {
        data = null;
      }

      if (data && data.error === true) {
        dispatch(Creators.failure());
        return {
          success: false,
          mensagem: data.mensagem || "Erro desconhecido",
        };
      }

      dispatch(Creators.success());
      return { success: true };
    } catch (error) {
      dispatch(Creators.failure());
      return { success: false, error };
    }
  };
};
