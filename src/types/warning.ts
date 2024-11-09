export type ProcessWarning = {
  id: number;
  warningTypeId: number;
  warningTypeName: string;
  subprocessId: number;
  subprocessName: string;
  createdAt: string;
};

export type ProcessWarningType = {
  id: number;
  warningTypeName: string;
};
