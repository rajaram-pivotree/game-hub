import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const GameCardSkeleton = () => {
  return (
    <Card>
      <CardBody>
        <Skeleton height="200px">
          <SkeletonText></SkeletonText>
        </Skeleton>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
