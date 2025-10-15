import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";

const DemoCredentials: React.FC = () => {
  return (
    <Card className="mt-6 border-blue-200 bg-blue-50">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-blue-900">Demo Credentials</h3>
            <div className="text-sm text-blue-800">
              <p className="font-medium">For testing purposes:</p>
              <div className="mt-1 space-y-1">
                <p><strong>Email:</strong> demo@synthiolabs.com</p>
                <p><strong>Password:</strong> demo123</p>
              </div>
              <p className="text-xs text-blue-700 mt-2">
                You can also create a new account with any email and password (6+ characters).
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DemoCredentials;
