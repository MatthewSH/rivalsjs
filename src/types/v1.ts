export interface HealthCheckResponse {
	error: boolean;
	message: string;
	status: number;
	serverTime: string;
	serverResponseTime: string;
}
