export interface ProgressTrackingProps {}

export interface ProgressTrackingViewProps {
  isLoading: boolean;
  isError: boolean;
  sortedTotalizadores: {
    temaNome: string;
    totalQuestionsAnswered: string;
    correctAnswers: string;
    answeredProgress: number;
    correctProgress: number;
  }[];
  sortOrder: string;
  setSortOrder: (value: string) => void;
}
