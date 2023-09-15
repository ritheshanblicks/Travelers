import React from 'react';
import Avatar from '@mui/material/Avatar';
import { getInitialText, getInitialFromText } from '../common/utils/util';
interface BadgeProfileProps {
  size: string;
  alt: string;
  firstName?: string;
  lastName?: string;
}

const BadgeProfile = ({
  size,
  alt,
  firstName,
  lastName,
}: BadgeProfileProps) => {
  let text = '';
  if (firstName && lastName) {
    text = getInitialText(firstName, lastName);
  } else {
    text = getInitialFromText(alt);
  }
  return (
    <>
      {
        {
          md: (
            <Avatar alt={alt} className="badge badge-profile">
              {text}
            </Avatar>
          ),
          sm: (
            <Avatar alt={alt} className="badge badge-profile small">
              {text}
            </Avatar>
          ),
        }[size]
      }
    </>
  );
};

export default React.memo(BadgeProfile);
