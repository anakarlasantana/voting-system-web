export type Topic = {
  id: number;
  title: string;
  description: string;
  status: "waiting" | "open" | "closed";
  created_at: string;
};

export type NewTopicPayload = {
  title: string;
  description?: string;
};

export type SessionPayload = {
  duration_minutes?: number;
};

export type VotePayload = {
  choice: "Sim" | "Não";
};
