import Box from "./Box";

export default function Designer() {
  return (
    <div>
      <h3 className="my-6 ml-2">Designer</h3>
      <Box id="1" canDrop={true}>
        <div style={{ margin: 10, padding: 10 }}>source1</div>
        <Box id="2" canDrop={true}>
          <div style={{ margin: 10, padding: 10 }}>source2</div>
          <Box id="3" canDrop={true}>
            <div style={{ margin: 10, padding: 10 }}>source3</div>
            <Box id="4" canDrop={true}>
              <div style={{ margin: 10, padding: 10 }}>source4</div>
            </Box>
            <Box id="5" canDrop={true}>
              <div style={{ margin: 10, padding: 10 }}>source5</div>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
