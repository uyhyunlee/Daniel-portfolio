import type { ReactNode } from 'react';

type SiteContainerProps = {
  children: ReactNode;
  className?: string;
};

function SiteContainer({ children, className = '' }: SiteContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1402px] px-6 lg:px-0 ${className}`}>
      {children}
    </div>
  );
}

export default SiteContainer;
