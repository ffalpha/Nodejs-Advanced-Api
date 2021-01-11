//@desc    Get all bootcamps
//@route   GET /api/v1/bootcamps
//@access  Public
exports.getBootCamps = (req,res,next) => {
    res.status(200).json({sucsses:true,msg:"Show all Bottcmaps"})
}

//@desc    Get Single bootcamps
//@route   GET /api/v1/bootcamps/:id
//@access  Public
exports.getBootCamp = (req,res,next) => {
    res.status(200).json({sucsses:true,msg:`Get single bootcamp ${req.params.id}`})
}


//@desc    Create a new bootcamp
//@route   POST /api/v1/bootcamps/
//@access  Private
exports.createBootCamp= (req,res,next) => {
    res.status(200).json({sucsses:true,msg:"Create new  bootcamp"})
}


//@desc    Update a single bootcamp
//@route   PUT /api/v1/bootcamps/:id
//@access  Private
exports.updateBootCamp= (req,res,next) => {
    res.status(200).json({sucsses:true,msg:`Update bootcamp ${req.params.id}`})
}


//@desc    Delete a single bootcamp
//@route   DELETE /api/v1/bootcamps/:id
//@access  Private
exports.deleteBootCamp= (req,res,next) => {
    res.status(200).json({sucsses:true,msg:`Delete bootcamp ${req.params.id}`})
}

