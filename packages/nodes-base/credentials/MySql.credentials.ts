import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class MySql implements ICredentialType {
	name = 'mySql';

	displayName = 'MySQL';

	documentationUrl = 'mySql';

	properties: INodeProperties[] = [
		{
			displayName: 'Host',
			name: 'host',
			type: 'string',
			default: 'localhost',
		},
		{
			displayName: 'Database',
			name: 'database',
			type: 'string',
			default: 'mysql',
		},
		{
			displayName: 'User',
			name: 'user',
			type: 'string',
			default: 'mysql',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
		{
			displayName: 'Port',
			name: 'port',
			type: 'number',
			default: 3306,
		},
		{
			displayName: 'Connect Timeout',
			name: 'connectTimeout',
			type: 'number',
			default: 10000,
			description:
				'The milliseconds before a timeout occurs during the initial connection to the MySQL server',
		},
		{
			displayName: 'SSL',
			name: 'ssl',
			type: 'boolean',
			default: false,
		},
		{
			displayName: 'CA Certificate',
			name: 'caCertificate',
			typeOptions: {
				password: true,
			},
			displayOptions: {
				show: {
					ssl: [true],
				},
			},
			type: 'string',
			default: '',
		},
		{
			displayName: 'Client Private Key',
			name: 'clientPrivateKey',
			typeOptions: {
				password: true,
			},
			displayOptions: {
				show: {
					ssl: [true],
				},
			},
			type: 'string',
			default: '',
		},
		{
			displayName: 'Client Certificate',
			name: 'clientCertificate',
			typeOptions: {
				password: true,
			},
			displayOptions: {
				show: {
					ssl: [true],
				},
			},
			type: 'string',
			default: '',
		},
		{
			displayName: 'SSH Tunnel',
			name: 'sshTunnel',
			type: 'boolean',
			default: false,
		},
		{
			displayName: 'SSH Host',
			name: 'sshHost',
			type: 'string',
			default: 'localhost',
			displayOptions: {
				show: {
					sshTunnel: [true],
				},
			},
		},
		{
			displayName: 'SSH User',
			name: 'sshUser',
			type: 'string',
			default: 'root',
			displayOptions: {
				show: {
					sshTunnel: [true],
				},
			},
		},
		{
			displayName: 'SSH Password',
			name: 'sshPassword',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			displayOptions: {
				show: {
					sshTunnel: [true],
				},
			},
		},
		{
			displayName: 'SSH Port',
			name: 'sshPort',
			type: 'number',
			default: 22,
			displayOptions: {
				show: {
					sshTunnel: [true],
				},
			},
		},
	];
}
