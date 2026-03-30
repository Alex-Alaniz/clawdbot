export const CONTROL_UI_BOOTSTRAP_CONFIG_PATH = "/__openclaw/control-ui-config.json";

export type ControlUiBootstrapConfig = {
  basePath: string;
  assistantName: string;
  assistantAvatar: string;
  assistantAgentId: string;
  serverVersion?: string;
  /** SaaS-only: when set, the shared nav bar renders with a "Back to Dashboard" link. */
  dashboardUrl?: string;
};
