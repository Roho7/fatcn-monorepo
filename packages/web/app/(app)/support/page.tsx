type Props = {};

const SupportPage = (props: Props) => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <iframe
        id="kofiframe"
        src="https://ko-fi.com/fatcn/?hidefeed=true&widget=true&embed=true&preview=true"
        // className="rounded-lg w-full my-auto bg-primary"
        style={{
          border: 'none',
          width: '100%',
          padding: '4px',
          background: '#f9f9f9',
        }}
        height="712"
        title="fatcn"
      ></iframe>
    </div>
  );
};

export default SupportPage;
