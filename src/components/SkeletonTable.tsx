import { Table, Skeleton } from 'antd';
import styles from "../styles/Home.module.css";
import { columns } from '@/utils/statics';

const SkeletonTable = () => {
  const numRows = 9;
  const skeletonContent = (
    <Skeleton active paragraph={{ rows: 0 }} className={`${styles.fullWidth} skeleton-row`} />

  );
  const skeletonContentForTowLine = (
    <Skeleton active paragraph={{ rows: 1 }} className={`${styles.fullWidth} skeleton-row`} />

  );

let column = columns.map((column,i) =>{
    return {
        title: column.title,
        dataIndex: column.dataIndex,
        key: column.key,
        render: () => i == 2?skeletonContentForTowLine: skeletonContent
    }
})

  const dataSource = [...Array(numRows)].map((_, index) => ({
    key: index,
    ...Object.fromEntries(column.map((col) => [col.dataIndex, skeletonContent])),
  }));

  return <Table dataSource={dataSource} columns={column} pagination={false} style={{ textTransform: 'uppercase' }}/>;
};

export default SkeletonTable;
