const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete")
const TracksScheme = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        album: {
            type: String,
        },
        cover: {
            type: String,
            validate: {
                validator: (req) => {
                    return true;
                },
                message: "ERROR_URL",
            },
        },
        artist: {
            name: {
                type: String,
            },
            nickname: {
                type: String,
            },
            nationality: {
                type: String,
            },
        },
        duration: {
            start: {
                type: Number,
            },
            end: {
                type: Number,
            },
        },
        mediaId: {
            type: mongoose.Types.ObjectId,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
/**
 * implemnetacion el metodo de la relacion a storage
 */
TracksScheme.statics.findAllData = function () {
    const joinData = this.aggregate([ //Todo  Tracks
        {
            $lookup: {
                from: "storages", // Todo Tracks --> storages
                localField: "mediaId", //Todo Tracks.mediaId
                foreignField: "_id", //Todo stracks._id
                as: "audio" //Todo Alias
            }
        },
        {
            $unwind: "$audio"
        }
    ])
    return joinData

};

TracksScheme.statics.findOneData = function (id) {
    const joinData = this.aggregate([ //Todo  Tracks

        {
            $match: {
                _id: mongoose.Types.ObjectId(id)
            }
        },
        {  $lookup: {
                from: "storages", // Todo Tracks --> storages
                localField: "mediaId", //Todo Tracks.mediaId
                foreignField: "_id", //Todo stracks._id
                as: "audio" //Todo Alias
            }
        },
        {
            $unwind: "$audio"
        }

    ])
    return joinData

}

TracksScheme.plugin(mongooseDelete, {overrideMethods: 'all'})
module.exports = mongoose.model("tracks", TracksScheme);
