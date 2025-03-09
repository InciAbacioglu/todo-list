export type ButtonProps = {
  text: string;
  onClick: () => void;
  state?: "disabled" | "active";
};
export type ButtonVariant = "primary" | "secondary" | "danger";
export type ButtonSize = "small" | "medium" | "large";

export interface IconButtonProps extends ButtonProps {
  icon?: React.ReactNode;
}
