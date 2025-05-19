import { useRouter } from "expo-router";

export interface ResetPasswordProps {}

export type ResetPasswordViewProps = {
  newPassword: string;
  setNewPassword: React.Dispatch<React.SetStateAction<string>>;
  validationResults: PasswordValidationResult;
  handleResetPassword: () => void;
  route: ReturnType<typeof useRouter>;
};

export interface PasswordValidationResult {
  hasMinLength: boolean;
  hasNumber: boolean;
  hasLetter: boolean;
  hasSpecialChar: boolean;
  isDifferentFromPrevious: boolean;
}
