import { Dispatch } from "redux";
import { SmsRecuperarCreators as Creators } from "../../ducks";

export const fetchSmsRecuperarThunk = (email: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(Creators.request());

    try {
      const response = await fetch(
        "https://utisoftsandbox.appws.com.br/conexao/perfil/smsRecuperar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ email }),
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

      let data;
      try {
        data = JSON.parse(decodedText);
      } catch {
        data = null;
      }

      if (!response.ok || (data && data.error)) {
        dispatch(Creators.failure());
        return {
          success: false,
          mensagem: data?.mensagem || "Falha ao enviar SMS de recuperação.",
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
