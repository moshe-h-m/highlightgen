import React from 'react';
import { useStore } from '../store/useStore';
import { Platform } from '../types';
import { Youtube, Facebook, Instagram } from 'lucide-react';

export default function AccountsManager() {
  const { accounts, addAccount, removeAccount } = useStore();

  const getPlatformIcon = (platform: Platform) => {
    switch (platform) {
      case 'youtube':
        return <Youtube className="w-5 h-5" />;
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const handleConnect = async (platform: Platform) => {
    // Implement OAuth flow for each platform
    console.log(`Connecting to ${platform}...`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-6">Connected Accounts</h2>

      <div className="space-y-4">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="flex items-center gap-3">
              {getPlatformIcon(account.platform)}
              <div>
                <p className="font-medium">{account.username}</p>
                <p className="text-sm text-gray-500 capitalize">
                  {account.platform}
                </p>
              </div>
            </div>
            <button
              onClick={() => removeAccount(account.id)}
              className="text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Disconnect
            </button>
          </div>
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          {(['tiktok', 'youtube', 'facebook', 'instagram'] as Platform[]).map(
            (platform) => (
              <button
                key={platform}
                onClick={() => handleConnect(platform)}
                className="flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                {getPlatformIcon(platform)}
                <span className="capitalize">Connect {platform}</span>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}