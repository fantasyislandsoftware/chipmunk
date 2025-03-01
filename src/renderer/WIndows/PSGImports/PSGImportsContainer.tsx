import { useGetPSGList } from '../../../api/hooks/useGetPSGList';
import WindowContainer from '../../Components/WindowContainer';
import PSGImportsView from './PSGImportsView';
import Loader from '../../Components/Loader';

const PSGImportsContainer = () => {
  const { loading, data, error } = useGetPSGList();
  return (
    <WindowContainer
      id="psg_import"
      title="PSG Import"
      width={800}
      height={488}
      content={loading ? <Loader /> : <PSGImportsView data={data} />}
    />
  );
};

export default PSGImportsContainer;
