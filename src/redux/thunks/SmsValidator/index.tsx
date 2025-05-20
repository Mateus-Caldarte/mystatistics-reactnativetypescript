import { Dispatch } from "redux";
import { SmsValidarCreators as Creators } from "../../ducks";

export const fetchSmsValidarThunk = (
  email: string,
  tokenRecuperarSenha: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch(Creators.request());

    try {
      const response = await fetch(
        "https://utisoftsandbox.appws.com.br/conexao/perfil/smsValidar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            email,
            tokenRecuperarSenha,
          }),
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
        throw new Error("Falha ao validar SMS");
      }

      let data;
      try {
        data = JSON.parse(decodedText);
      } catch (parseError) {
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
