import styles from '@/styles/Home.module.css';
import { Table, message } from 'antd';
import { useEffect, useState } from 'react';
import { columns } from '@/utils/statics';
import { useQuery } from '@apollo/client';
import { CALLS_QUERY } from '@/mutation/callMutation';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Pagination from '@/components/Pagination';

const DataPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    refetch();
  };

  useEffect(() => {
    refetch({ page: currentPage });
    // eslint-disable-next-line
  }, [currentPage]);

  const { loading, error, data, refetch }: any = useQuery(CALLS_QUERY, {
    variables: {
      offset: (currentPage - 1) * 10,
      limit: 10,
    },
  });
  if (error) {
    console.log('error', error.message);
    if (error?.message.toLowerCase() == 'Unauthorized'.toLowerCase()) {
      messageApi.open({
        type: 'warning',
        content: 'you session is out , please login again',
      });
      localStorage.clear();
      router.push('/');
    }
  }
  if (data?.quotes?.length == 0) {
    return <h2>No Quotes available</h2>;
  }

  return (
    <main className={`${styles.main}`}>
      {contextHolder}
      <Header />
      <div className=''>
        <Hero />
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <Table
            dataSource={data?.paginatedCalls?.nodes}
            columns={columns}
            className={styles.table}
            pagination={false}
          />
        )}

        {/* pagination is here */}
        <Pagination
          currentPage={currentPage}
          pageChangeCb={(e) => handlePageChange(e)}
          content={data}
        />
      </div>
    </main>
  );
};

export default DataPage;

